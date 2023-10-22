const Joi = require('joi');


const joiSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
    )
    .error(
      new Error(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
      )
    ),
});

module.exports = joiSchema  