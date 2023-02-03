const { server } = require("./server.js");

// const port = process.env.PORT || 3000;
require("dotenv").config();
const port = process.env.PORT || 3000;
// console.log(process.env);

server.listen(port, () => console.log(`Listening at http://localhost:${port}`));
