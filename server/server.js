const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());






app.use(express.static(path.resolve(__dirname, "../build")));
// app.use(express.static(path.resolve(__dirname, "../assets")));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   return next();
// });



//** 404 error **//

app.use("*", (req, res) => res.status(404).send("Not Found"));

//** Global Error **//
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error " + err.message,
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}.`);
});

module.exports = app;
