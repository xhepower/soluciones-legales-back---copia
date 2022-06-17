module.exports = {
  HOST: "localhost",
  USER: "xhepo",
  PASSWORD: "example",
  DB: "jda",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
