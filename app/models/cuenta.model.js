module.exports = (sequelize, Sequelize) => {
  const Cuenta = sequelize.define("cuenta", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    tipo: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  });
  return Cuenta;
};
