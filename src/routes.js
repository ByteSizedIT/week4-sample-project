const { homeTemplate } = require("./templates.js");

// Fetch requests to GitHub api stored in oauth.js
const oauth = require("./oauth.js");

// Request users gitHub identity...
// ref https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#1-request-a-users-github-identity
require("dotenv").config();
const client_id = process.env.CLIENT_ID;
const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

function homeHandler(req, res) {
  const user = req.signedCookies.user;
  const body = homeTemplate(user, GITHUB_LOGIN_URL);
  res.send(body);
}

function oauthHandler(req, res) {
  const code = req.query.code;
  oauth
    .getToken(code)
    .then(oauth.getUser)
    .then((user) => {
      console.log({ user });
      // TODO:
      // create a new user in app DB
      // create session in app DB and ref in cookies etc
      // Interim temp solution adds the username into the cookie
      res.cookie("user", user.login, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: "lax",
      });
      res.redirect("/hell-yeah");
    });
}

module.exports = { homeHandler, oauthHandler };
