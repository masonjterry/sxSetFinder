const router = require("express").Router();
const testController = require("../../controllers/testController");

router.route("/")
  .get(testController.loadItems)
  .post(testController.createTest);

module.exports = router;
