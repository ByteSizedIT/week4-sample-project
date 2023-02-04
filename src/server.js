const express = require("express");
const cookieParser = require("cookie-parser");
const { homeHandler } = require("./routes");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

require("dotenv").config();
server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/", homeHandler);

module.exports = { server };
