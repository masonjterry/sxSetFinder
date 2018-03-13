const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  testName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const testSchema = mongoose.model("TestSchema", testSchema);

module.exports = testSchema;
