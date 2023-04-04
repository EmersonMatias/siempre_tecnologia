import jwt from "jsonwebtoken";
export function validateUserToken(req, res, next) {
    var userToken = req.headers.authorization;
    var token = userToken === null || userToken === void 0 ? void 0 : userToken.split(" ");
    if (!userToken)
        return res.sendStatus(401);
    if (token[0] !== "Bearer")
        return res.sendStatus(401);
    jwt.verify(token[1], process.env.ACESS_TOKEN_SECRET, function (error, dataToken) {
        if (error) {
            return res.sendStatus(401);
        }
        req.datatoken = dataToken;
        next();
    });
}
