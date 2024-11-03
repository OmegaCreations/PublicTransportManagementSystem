const { pool } = require("./connections");

const dbQuery = async (query) => {
  let connection;
  try {
    connection = await pool.getConnection();
    return await connection.query(query);
  } catch (error) {
    console.error("Error in query:", error);
    return null;
  } finally {
    if (connection) connection.release();
  }
};

// ---------------------------------------------------------------
// Selecting queries

// gets all buses
const getAllLines = async () => {
  return await dbQuery(
    "SELECT linia.linia_nr as line_number, linia.kierunek as direction FROM linia;"
  );
};

// get all line stops
const getLineStops = async (line_number) => {
  return await dbQuery(`
      SELECT l.linia_nr as line_number, l.kierunek AS direction, lp.numer_kolejnosci as order_number, p.name as stop_name
        FROM przystanek p
            JOIN linia_przystanek lp USING (przystanek_id)
            JOIN linia l USING (linia_id)
        WHERE l.linia_nr = '${Number(line_number)}';
    `);
};

// ---------------------------------------------------------------
// Insert Queries

// add new bus line
const addNewLine = async (line_number, direction, stops) => {
  // Validate line_number
  if (isNaN(Number(line_number))) {
    return { message: "Invalid line number." };
  }

  let res = await dbQuery(`
    INSERT IGNORE INTO linia (linia_nr, kierunek) VALUES
      (${Number(line_number)}, '${String(direction)}');
  `).catch((err) => {
    console.log(err);
    return null;
  });

  if (!res || res.affectedRows === 0) {
    return { message: "This line already exists. Go edit it." };
  }

  // Iterate through all bus stops and add data to it
  for (const stop of stops) {
    // Insert stop data
    res = await dbQuery(`
      INSERT IGNORE INTO linia_przystanek (linia_id, przystanek_id, numer_kolejnosci) VALUES
        (
          (SELECT linia_id FROM linia WHERE kierunek = '${String(
            direction
          )}' AND linia_nr = ${Number(line_number)}), 
          (SELECT przystanek_id FROM przystanek WHERE name = '${String(
            stop.name
          )}'),
          ${Number(stop.order)}
        );
    `).catch((err) => {
      console.log(err);
      return null;
    });

    if (!res || res.affectedRows === 0) {
      return { message: `Wrong data for new bus stop: ${stop.name}` };
    }

    // Add all departure hours for specific bus stop
    for (const departure of stop.departures) {
      res = await dbQuery(`
        INSERT IGNORE INTO godzina_odjazdu (linia_przystanek_id, godzina_odjazdu) VALUES
          ((SELECT linia_przystanek_id FROM linia_przystanek WHERE linia_id = 
            (SELECT linia_id FROM linia WHERE kierunek = '${String(
              direction
            )}' AND linia_nr = ${Number(
        line_number
      )}) AND przystanek_id = (SELECT przystanek_id FROM przystanek WHERE name = '${
        stop.name
      }')), 
          '${String(departure)}'
      );
      `).catch((err) => {
        console.log(err);
        return null;
      });

      if (!res || res.affectedRows === 0) {
        return {
          message: `Wrong data at departure hours for line number: ${line_number} and stop: ${stop.name}`,
        };
      }
    }
  }

  return {
    message: `Added new bus line ${line_number}, ${direction}`,
  };
};

module.exports.getAllLines = getAllLines;
module.exports.getLineStops = getLineStops;
module.exports.addNewLine = addNewLine;
