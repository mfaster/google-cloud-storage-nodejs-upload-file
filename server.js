const cors = require("cors");
const express = require("express");
const app = express();

// let corsOptions = {
//   origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const initRoutes = require("./src/routes");



app.use(express.urlencoded({ extended: true }));
initRoutes(app);

// const port = 8080;
// app.listen(port, () => {
//   console.log(`Running at localhost:${port}`);
// });


// # use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started.......");
  console.log("##### Path #####");
  console.log("## GET : /files ##");
  console.log("## GET : /files/:name ##");
  console.log("## POST : /upload ##");
});