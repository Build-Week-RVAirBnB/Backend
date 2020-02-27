const express = require("express");

const server = express();

//----------------------------------------------------------------------------//
// Note that we are not "server.listen()"ing in this file. This is important,
// because the jest test files that we will define need to be able to get an
// instance of express with our defined/configured middleware and handlers, that
// is not listening on a port. If multiple tests tried to run using the same
// port, only the first one would be able to run and start express listening
// (probably). 
//
// We use supertest in our test files to get a copy of the instance of express
// server that is exported from this file, and start it listening on an
// "ephemeral" port (see https://en.wikipedia.org/wiki/Ephemeral_port). 
//----------------------------------------------------------------------------//

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});


module.exports = server;
