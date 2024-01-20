const express = require("express");
const { validationBody, authenticate, upload } = require("../../middlewares");
const { registerShema, emailShema } = require("../../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validationBody(registerShema), register);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validationBody(emailShema), resendVerifyEmail);
router.post("/login", validationBody(registerShema), login);
router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);
module.exports = router;
