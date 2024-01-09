const express = require("express");

const {
  contactsAll,
  contactById,
  contactAdd,
  contactDelete,
  contactEdit,
  updateFavorite,
} = require("../../controllers/controlers");

const { validationBody, isIdValid } = require("../../middlewares");

const { validationSheme, updateFavoriteSchema } = require("../../schemas");

const router = express.Router();

router.get("/", contactsAll);

router.get("/:contactId", isIdValid, contactById);

router.post("/", validationBody(validationSheme), contactAdd);

router.delete(
  "/:contactId",
  isIdValid,
  validationBody(validationSheme),
  contactDelete
);

router.put(
  "/:contactId",
  isIdValid,
  validationBody(validationSheme),
  contactEdit
);

router.patch(
  "/:contactId/favorite",
  isIdValid,
  validationBody(updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
