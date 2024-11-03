const { pool } = require("./connections");

// Selecting queries
const dbQuerySelect = async (query) => {
  let connection;
  try {
    connection = await pool.getConnection();
    return await connection.query(query);
  } catch (error) {
    console.error("Błąd w zapytaniu:", error);
    return null;
  } finally {
    if (connection) connection.release();
  }
};

// gets all buses
const getAllLines = async () => {
  return await dbQuerySelect(
    "SELECT linia.linia_nr as line_number, linia.kierunek as direction FROM linia;"
  );
};

// get all line stops
const getLineStops = async (line_number) => {
  return await dbQuerySelect(`
      SELECT l.linia_nr as line_number, l.kierunek AS direction, lp.numer_kolejnosci as order_number, p.name as stop_name
        FROM przystanek p
            JOIN linia_przystanek lp USING (przystanek_id)
            JOIN linia l USING (linia_id)
        WHERE l.linia_nr = '${Number(line_number)}';
    `);
};

module.exports.getAllLines = getAllLines;
module.exports.getLineStops = getLineStops;
