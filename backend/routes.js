const express = require("express");
const { getLineStops, getAllLines } = require("./config/db");

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

  if (data != null) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ message: "Something went wrong." });
  }
});

// admin routes
const admin_routes = express.Router();

module.exports.public_routes = public_routes;
module.exports.admin_routes = admin_routes;
