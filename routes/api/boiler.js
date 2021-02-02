const router = require("express").Router();

router.route("/")
    .get()
    .post()
    .put();

router.route("/:pId/:cId")
    .delete();

router
    .route("/many-del/:id")
    .delete();

module.exports = router;