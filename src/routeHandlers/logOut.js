function logOut(req, res) {
  res.clearCookie("user");
  res.redirect("/");
}

module.exports = logOut;
