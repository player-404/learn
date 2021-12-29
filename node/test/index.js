const crypto = require("crypto");

const randomBytes = crypto.randomBytes(32).toString("hex");
console.log("随机字节", randomBytes);
