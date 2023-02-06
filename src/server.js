const express = require("express");
const cookieParser = require("cookie-parser");
const { homeHandler, oauthHandler } = require("./routes");

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
server.get("/oauth2callback", oauthHandler);

server.get("/hell-yeah", (req, res) => {
  res.send(`<h1>Authorized!</h1>`);
});

module.exports = { server };
