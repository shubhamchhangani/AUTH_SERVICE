const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/index.js");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "hello from new server of authorization service",
  });
});

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(3000, () => {
    console.log("server started");
  });
};

prepareAndStartServer();
