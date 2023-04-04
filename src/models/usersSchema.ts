import Joi from "joi";

export const signupSchema = Joi.object({
    name: Joi.string().required().min(3).max(150),
    email: Joi.string().email().required().min(5).max(150),
    password: Joi.string().required().min(8).max(150),
    phone: Joi.string().required(),
    city: Joi.string().required().max(150),
    adress: Joi.string(),
    price: Joi.number().integer(),
    account_type: Joi.string()
})

export const signinSchema = Joi.object({
    email: Joi.string().required().min(5).max(150).email(),
    password: Joi.string().required().min(8).max(150)
})

