const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
const multer = require('multer')

let routes = (app) => {
  router.post("/upload", multer().single("file"), controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;
