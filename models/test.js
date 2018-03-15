const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const credentials = new Schema({
  phoneNumber: { type: String, required: true },
  nickName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Credentials = mongoose.model("Credentials", credentials);

module.exports = Credentials;
