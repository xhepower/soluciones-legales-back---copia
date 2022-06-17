module.exports = (sequelize, Sequelize) => {
  const Retiro = sequelize.define("retiro", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    fecha: {
      allowNull: false,
      type: Sequelize.DATEONLY,
    },
    cuenta: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    monto: {
      allowNull: true,
      type: Sequelize.DECIMAL(10, 2),
    },
  });
  return Retiro;
};
