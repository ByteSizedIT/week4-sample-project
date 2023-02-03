const express = require("express");
const { homeHandler } = require("./routes");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

server.get("/", homeHandler);

module.exports = { server };
