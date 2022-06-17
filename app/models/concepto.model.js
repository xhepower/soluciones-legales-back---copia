module.exports = (sequelize, Sequelize) => {
  const Concepto = sequelize.define("concepto", {
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
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
  return Concepto;
};
