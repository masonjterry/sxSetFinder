const router = require("express").Router();
const testRoutes = require("./testRoutes");

router.use("/test", testRoutes);

// router.use("/route2", route2Routes);
//
// router.use("/route3", route3Routes);

module.exports = router;
