const express = require("express");
const { validationBody, authenticate } = require("../../middlewares");
const { registerShema } = require("../../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validationBody(registerShema), register);
router.post("/login", validationBody(registerShema), login);
router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);
module.exports = router;
