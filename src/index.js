const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "hello from new server of authorization service",
  });
});

const prepareAndStartServer = () => {
  app.listen(3000, () => {
    console.log("server started");
  });
};

prepareAndStartServer();
