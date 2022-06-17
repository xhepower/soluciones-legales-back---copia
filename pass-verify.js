const bcrypt = require("bcrypt");

async function verifyPassword(hash, myPassword) {
  const isMatch = await bcrypt.compare(myPassword, hash);
  return isMatch;
}

module.export = verifyPassword;
