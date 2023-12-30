const Book = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../service");

const contactsAll = async (req, res) => {
  const result = await Book.find();
  res.json(result);
};

const contactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Book.findById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const contactAdd = async (req, res) => {
  const result = await Book.create(req.body);
  res.status(201).json(result);
};

const contactDelete = async (req, res) => {
  const { contactId } = req.params;
  const result = await Book.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const contactEdit = async (req, res) => {
  const { contactId } = req.params;
  const result = await Book.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  console.log("result: ", result);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Book.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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
  updateFavorite: ctrlWrapper(updateFavorite),
};
