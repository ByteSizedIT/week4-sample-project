// Fetch requests to GitHub api stored in oauth.js
const api = require("../api.js");

// If user accepts auth request, GitHub redirects back to route below..
// ..with a temp code in a code parameter
// as well as the state you provided in the previous step in a state parameter.
// The temporary code will expire after 10 minutes.
// POST this code to GH to get an access_token for talking to their API
// If the states don't match, then a third party created the request, and you should abort the process.
function oauthHandler(req, res) {
  const code = req.query.code;
  api
    .getToken(code)
    .then(api.getUser)
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
      res.redirect("/");
    });
}

module.exports = oauthHandler;
