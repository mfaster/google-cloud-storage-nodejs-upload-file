const cors = require("cors");
const express = require("express");
const app = express();

// let corsOptions = {
//   origin: "adonwebthailand.com",
// };

// app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'adonwebthailand.com'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, multipart/form-data'); //เพิ่ม multipart
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
//     if (req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
//         res.setHeader('Access-Control-Allow-Credentials', true);
//         return res.status(200).json({});
//     }
//     next();
// });

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested, Content-Type, Accept Authorization"
//   )
//   if (req.method === "OPTIONS") {
//     res.header(
//       "Access-Control-Allow-Methods",
//       "POST, PUT, PATCH, GET, DELETE"
//     )
//     return res.status(200).json({})
//   }
//   next()
// })

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