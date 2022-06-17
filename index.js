//
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const initial = require("./app/models/initial");
const routerApi = require("./app/routes");
const {
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./app/middlewares/error.handler");
const whitelist = [
  "http://localhost:3001",
  "http://localhost:3000",
  "http://localhost:8081",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//app.use(bodyParser);
db.sequelize.sync();
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  //Esta funcion create es para poblar la base de datos, el caso de users si no la uso debo meterlos a mano los datos estan en l funcion initial users [admin, user, moderator]
  initial();
});*/

// simple route
app.get("/", (req, res) => {
  res.json({ message: "HOME" });
});
routerApi(app);
// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
