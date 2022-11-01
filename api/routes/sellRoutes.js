const express = require("express");
const postControllers = require("../controllers/sellControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllSell)
.post (checkToken,postControllers.reqSaveSell);
router.route("/max").get(checkToken,postControllers.getMaxIdSell);
router.route("/:id").get(checkToken,postControllers.getSellById);


module.exports = router;