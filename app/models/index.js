const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.clientes = require("./cliente.model.js")(sequelize, Sequelize);
db.conceptos = require("./concepto.model.js")(sequelize, Sequelize);
db.cuentas = require("./cuenta.model.js")(sequelize, Sequelize);
db.ingresos = require("./ingreso.model.js")(sequelize, Sequelize);
db.egresos = require("./egreso.model.js")(sequelize, Sequelize);
db.depositos = require("./deposito.model.js")(sequelize, Sequelize);
db.retiros = require("./retiro.model.js")(sequelize, Sequelize);
module.exports = db;
