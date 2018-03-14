const db = require("../models");

module.exports = {
  createTest: function(req, res) {
    db.Credentials
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  },
  loadItems: function(req, res) {
    db.Credentials
    .find(req.query)
    .sort({ date: -1 })
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  }
}
