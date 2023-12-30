const express = require("express");

const {
  contactsAll,
  contactById,
  contactAdd,
  contactDelete,
  contactEdit,
} = require("../../controllers/controlers");

const { validationBody } = require("../../middlewares");

const { validationSheme } = require("../../schemas");

const router = express.Router();

router.get("/", validationBody(validationSheme), contactsAll);

router.get("/:contactId", validationBody(validationSheme), contactById);

router.post("/", validationBody(validationSheme), contactAdd);

router.delete("/:contactId", validationBody(validationSheme), contactDelete);

router.put("/:contactId", validationBody(validationSheme), contactEdit);

module.exports = router;
