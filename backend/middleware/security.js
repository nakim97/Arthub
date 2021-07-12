const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { UnauthorizedError } = require("../utils/errors");

// create a function to extract the JWT from request header
const jwtFrom = ({ headers }) => {
  if (headers?.authorization) {
    // Authorization: "Bearer aldjajdlkjs"
    const [scheme, token] = headers.authorization.split(" ");
    // use a scheme, then the token
    if (scheme.trim() === "Bearer") {
      return token;
    }
  }
  return undefined;
};
// create a function to attach the user to res object
const extractUserFromJwt = (req, res, next) => {
  try {
    // If we can take things from the header, get access to the user
    const token = jwtFrom(req);
    if (token) {
      res.locals.user = jwt.verify(token, SECRET_KEY);
    }
    return next();
  } catch (err) {
    return next();
  }
};
// create a function to verify a authed user exists
const requireAuthenticatedUser = (req, res, next) => {
  try {
    const { user } = res.locals;
    // If they have a valid email
    if (!user?.email) {
      throw new UnauthorizedError();
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  requireAuthenticatedUser,
  extractUserFromJwt,
  jwtFrom,
};
