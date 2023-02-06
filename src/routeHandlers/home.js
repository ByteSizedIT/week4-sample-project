const { homeTemplate } = require("../templates.js");

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

module.exports = homeHandler;
