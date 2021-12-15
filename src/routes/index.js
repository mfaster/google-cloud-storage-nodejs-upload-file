const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
// const processFile = require("../middleware/upload")
const multer = require('multer')

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxSize },
})

let routes = (app) => {
  router.post("/upload", upload.single("file"), controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;
