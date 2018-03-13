const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  testName: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const TestSchema = mongoose.model("TestSchema", testSchema);

module.exports = TestSchema;
