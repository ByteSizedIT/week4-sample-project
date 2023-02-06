const express = require("express");
const cookieParser = require("cookie-parser");
const homeHandler = require("./routeHandlers/home");
const oauthHandler = require("./routeHandlers/oauth");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

require("dotenv").config();
server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/", homeHandler);

// If user accepts auth request, GitHub redirects back to route below
server.get("/oauth2callback", oauthHandler);

server.get("/hell-yeah", (req, res) => {
  res.send(`<h1>Authorized!</h1>`);
});

module.exports = { server };
