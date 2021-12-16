var cors = require("cors");
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var initRoutes = require("./src/routes");
var serverPort = process.env.PORT || 3000

async function initServer() {
  console.log("======= Init Server =======")
  app = express();

  app.use(cors());
  app.use(bodyParser.json({ limit: "10mb" }))
  app.use(bodyParser.urlencoded({ extended: true }))


  initRoutes(app);


  app.listen(serverPort, () => {
    console.log("Server started.......");
    console.log("##### Path #####");
    console.log("## GET : /files ##");
    console.log("## GET : /files/:name ##");
    console.log("## POST : /upload ##");
  })
}

initServer()