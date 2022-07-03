const express = require("express");
const router = express.Router();
const userControlers=require('../controles/userControler')


router.get("/",userControlers.hello);

module.exports = router;
