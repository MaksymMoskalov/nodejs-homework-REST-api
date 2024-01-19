const express = require("express");
const { validationBody, authenticate, upload } = require("../../middlewares");
const { registerShema } = require("../../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validationBody(registerShema), register);
router.post("/login", validationBody(registerShema), login);
router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);
module.exports = router;
