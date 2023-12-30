const { Schema, model } = require("mongoose");
const { MongooseError } = require("../service");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      match: /^\+380\d{9}$/,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", MongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
