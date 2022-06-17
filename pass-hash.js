const bcrypt = require("bcrypt");

async function hashPassword(myPassword) {
  const hash = await bcrypt.hash(myPassword, 10);
  return hash;
}

module.export = hashPassword;
