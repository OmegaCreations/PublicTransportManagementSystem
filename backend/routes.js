const express = require("express");
const jwt = require("jsonwebtoken");
const {
  getLineStops,
  getAllLines,
  addNewLine,
  addNewStop,
} = require("./config/db");

// -------------------------
// public routes
const public_routes = express.Router();

public_routes.get("/", (req, res) => {
  res.status(200).send("Hello World.");
});

// get all buses
public_routes.get("/bus", async (req, res) => {
  const data = await getAllLines();

  if (data != null) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "Something went wrong." });
  }
});

// get all stops with given bus number (both directions returned)
public_routes.get("/bus/:line_number", async (req, res) => {
  const line_number = req.params.line_number;
  const data = await getLineStops(line_number);

  if (data && line_number) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "Something went wrong." });
  }
});

// -------------------------
// admin routes
const admin_routes = express.Router();

// user sessions statically for demonstrating purposes.
// in full project you could create second db with admin users.
// no need for signing up new users through forms in this project.
let users = [
  {
    username: "Admin",
    password: "Admin",
  },
];

// returns true if user is in users array
const authenticatedUser = (username, password) => {
  let validUsers = users.filter((user) => {
    return user.username === username && user.password === password;
  });

  return validUsers.length > 0;
};

//only "registered" users can log in
admin_routes.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(404).json({ message: "Error logging in" });
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign(
      {
        data: password,
      },
      "access", // <-very strong secret key
      { expiresIn: 60 * 60 }
    );

    req.session.authorization = { accessToken };
    req.session.username = username;

    return res.status(200).send("User successfully logged in.");
  } else {
    return res.status(208).json({ message: "Wrong username and password" });
  }
});

// adds new bus line
admin_routes.post("/bus", async (req, res) => {
  const line_number = req.body.line_number;
  const stops = req.body.stops;
  const direction = stops[stops.length - 1].name;
  if (line_number && stops && direction) {
    const result = await addNewLine(line_number, direction, stops);
    res.json(result);
  } else {
    return res.status(404).json({ message: "Error adding new Bus Line." });
  }
});

// adds new bus stop
admin_routes.post("/bus/stop", async (req, res) => {
  const stop_name = req.body.stop_name;

  if (stop_name) {
    const result = await addNewStop(stop_name);
    res.json({});
  } else {
    return res.status(404).json({ message: "Error adding new Bus Stop." });
  }
});

module.exports.public_routes = public_routes;
module.exports.admin_routes = admin_routes;
