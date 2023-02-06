const express = require("express");
const cookieParser = require("cookie-parser");
const { homeHandler } = require("./routes");

// Fetch requests to GitHub api stored in oauth.js
const oauth = require("./oauth.js");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

require("dotenv").config();
server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/", homeHandler);

// If user accepts auth request, GitHub redirects back to route below..
// ..with a temp code in a code parameter
// as well as the state you provided in the previous step in a state parameter.
// The temporary code will expire after 10 minutes.
// POST this code to GH to get an access_token for talking to their API
// If the states don't match, then a third party created the request, and you should abort the process.
server.get("/oauth2callback", (req, res) => {
  const code = req.query.code;
  oauth.getToken(code);
  res.redirect("/hell-yeah");
});

server.get("/hell-yeah", (req, res) => {
  res.send(`<h1>Authorized!</h1>`);
});

module.exports = { server };
