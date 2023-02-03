const express = require("express");
const { homeHandler } = require("./routes");

const server = express();

server.get("/", homeHandler);

module.exports = { server };
