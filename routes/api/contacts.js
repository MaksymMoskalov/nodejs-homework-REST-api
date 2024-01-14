const express = require("express");

const {
  contactsAll,
  contactById,
  contactAdd,
  contactDelete,
  contactEdit,
  updateFavorite,
} = require("../../controllers/controlers");

const {
  validationBody,
  isIdValid,
  authenticate,
} = require("../../middlewares");

const { validationSheme, updateFavoriteSchema } = require("../../schemas");

const router = express.Router();

router.get("/", authenticate, contactsAll);

router.get("/:contactId", authenticate, isIdValid, contactById);

router.post("/", authenticate, validationBody(validationSheme), contactAdd);

router.delete(
  "/:contactId",
  authenticate,
  isIdValid,
  validationBody(validationSheme),
  contactDelete
);

router.put(
  "/:contactId",
  authenticate,
  isIdValid,
  validationBody(validationSheme),
  contactEdit
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isIdValid,
  validationBody(updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
