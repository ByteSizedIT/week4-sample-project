const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

// Ref: https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps
// If the user accepts your GitHub Identity Request..
// GitHub redirects back to your site with a temporary code in a code parameter..
// as well as the state you provided in the previous step in a state parameter
// Exchange this code for an access token:

const ACCESS_TOKEN_URL = "https://github.com/login/oauth/access_token";

function getToken(code) {
  const body = { client_id, client_secret, code };
  console.log(body);
  return fetch(ACCESS_TOKEN_URL, {
    method: "POST",
    body: JSON.stringify(body),
    // IMPORTANT: THESE HEADERS ARE REQUIRED
    // GH will do weird 404 errors if you don't specify exactly what data type you're sending
    headers: { accept: "application/json", "content-type": "application/json" },
  })
    .then(getJson)
    .then((data) => data.access_token);
}
// Access Token response takes the following form:
/* Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
} */

function getJson(response) {
  if (!response.ok) {
    console.log(response);
    const error = new Error("HTTP Error");
    error.status = response.statusCode;
    throw error;
  }
  return response.json();
}

module.exports = { getToken };
