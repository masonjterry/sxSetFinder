const db = require("../models");

module.exports = {
  createTest: function(req, res) {
    db.TestSchema
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  }
}
