import { signinSchema } from "../models/usersSchema.js";
export function validateSigninData(req, res, next) {
    var signinData = req.body;
    if (!Object.keys(signinData).length)
        return res.sendStatus(400);
    var error = signinSchema.validate(signinData, { abortEarly: false }).error;
    if (error)
        throw res.status(400).send(error.details);
    next();
}
