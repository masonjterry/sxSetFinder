const router = require("express").Router();
const testController = require("../../controllers/testController");

router.route("/")
  // .get(testController.listTest)
  .post(testController.createTest);

module.exports = router;
