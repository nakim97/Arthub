const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

class User {
  static makePublicUser(user) {
    return {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      isAdmin: user.is_admin,
    };
  }

  static async login(credentials) {
    const requiredFields = ["email", "password"];
    requiredFields.forEach((property) => {
      if (!credentials.hasOwnProperty(property)) {
        throw new BadRequestError(`Missing ${property} in request body.`);
      }
    });

    const user = await User.fetchUserByEmail(credentials.email);
    if (user) {
      const isValid = await bcrypt.compare(credentials.password, user.password);
      if (isValid) {
        return User.makePublicUser(user);
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }

  static async register(credentials) {
    const requiredFields = [
      "email",
      "password",
      "username",
      "first_name",
      "last_name",
      "isAdmin",
    ];
    requiredFields.forEach((property) => {
      if (!credentials.hasOwnProperty(property)) {
        throw new BadRequestError(`Missing ${property} in request body.`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email.");
    }

    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError(
        `A user already exists with email: ${credentials.email}`
      );
    }

    const existingUserWithUsername = await User.fetchUserByUsername(
      credentials.username
    );
    if (existingUserWithUsername) {
      throw new BadRequestError(
        `A user already exists with username: ${credentials.username}`
      );
    }

    const hashedPassword = await bcrypt.hash(
      credentials.password,
      BCRYPT_WORK_FACTOR
    );
    const normalizedEmail = credentials.email.toLowerCase();

    const userResult = await db.query(
      `INSERT INTO users (email, password, username, first_name, last_name, is_admin)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, email, password, username, first_name, last_name, is_admin;
      `,
      [
        normalizedEmail,
        hashedPassword,
        credentials.username,
        credentials.first_name,
        credentials.last_name,
        credentials.isAdmin,
      ]
    );
    const user = userResult.rows[0];

    return User.makePublicUser(user);
  }

  static async fetchUserByEmail(email) {
    if (!email) {
      throw new BadRequestError("No email provided");
    }

    const query = `SELECT * FROM users WHERE email = $1`;

    const result = await db.query(query, [email.toLowerCase()]);

    const user = result.rows[0];

    return user;
  }

  static async fetchUserByUsername(username) {
    if (!username) {
      throw new BadRequestError("No username provided");
    }

    const query = `SELECT * FROM users WHERE username = $1`;

    const result = await db.query(query, [username]);

    const user = result.rows[0];

    return user;
  }
}

module.exports = User;
