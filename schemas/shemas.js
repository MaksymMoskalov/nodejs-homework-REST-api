const Joi = require("joi");

const validationSheme = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^\+380\d{9}$/)
    .required(),
});

module.exports = validationSheme;
