const Book = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../service");

const contactsAll = async (req, res) => {
  const result = await Book.find();
  res.json(result);
};

const contactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const contactAdd = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const contactDelete = async (req, res) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const contactEdit = async (req, res) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
  console.log("result: ", result);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  contactsAll: ctrlWrapper(contactsAll),
  contactById: ctrlWrapper(contactById),
  contactAdd: ctrlWrapper(contactAdd),
  contactDelete: ctrlWrapper(contactDelete),
  contactEdit: ctrlWrapper(contactEdit),
};
