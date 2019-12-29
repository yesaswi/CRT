const Joi = require("@hapi/joi");

//validation
const registerValidation = async data => {
  const schema = Joi.object({
    _id: Joi.string()
      .min(6)
      .required(),
    name: Joi.string()
      .min(5)
      .required()
  });
  return await schema.validateAsync(data);
};

module.exports.registerValidation = registerValidation;
