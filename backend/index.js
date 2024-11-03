const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const { public_routes, admin_routes } = require("./routes");

const app = express();
app.use(express.json());

app.use(
  "/admin",
  session({
    secret: "fingerprint_customer",
    resave: true,
    saveUninitialized: true,
  })
);

// middleware blocks routes for admin management
app.use("/admin/auth/*", function auth(req, res, next) {
  if (req.session.authorization) {
    token = req.session.authorization["accessToken"];

    jwt.verify(token, "access", (err, user) => {
      if (!err) {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "User not authenticated" });
      }
    });
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
});

const PORT = 5000;

app.use("/", public_routes);
app.use("/admin/", admin_routes);
app.listen(PORT);
