const express = require("express");
const { validationBody } = require("../../middlewares");
const { registerShema } = require("../../schemas");
const { register, login } = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validationBody(registerShema), register);
router.post("/login", validationBody(registerShema), login);

module.exports = router;
