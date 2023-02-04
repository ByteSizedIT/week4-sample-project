const express = require("express");
const cookieParser = require("cookie-parser");
const { homeHandler } = require("./routes");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

require("dotenv").config();
server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/", homeHandler);

server.get("/oauth2callback", (req, res) => {
  res.redirect("/hell-yeah");
});

server.get("/hell-yeah", (req, res) => {
  res.send(`<h1>Authorized!</h1>`);
});

module.exports = { server };
