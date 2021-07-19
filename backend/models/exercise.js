const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Exercise {
  static async listExercisesForUser({ user }) {
    const results = await db.query(
      `
    SELECT e.id AS "exerciseId",
    e.name AS "name",
    e.category AS "category",
    e.duration AS "duration",
    e.intensity AS "intensity",
    u.email AS "userEmail"
    FROM exercises AS e
    JOIN users AS u ON u.id = e.user_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    `,
      [user.email]
    );

    return results.rows;
  }
  static async listExerciseMinutes({ user }) {
    const results = await db.query(
      `
    SELECT SUM(e.duration) AS "duration",
    u.id
    FROM exercises AS e
    JOIN users AS u ON u.id = e.user_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    GROUP BY u.id
    
    `,
      [user.email]
    );

    return results.rows;
  }

  static async createExercise({ exercise, user }) {
    if (!exercise || !Object.keys(exercise).length) {
      throw new BadRequestError("No exercise info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    const results = await db.query(
      `
            INSERT INTO exercises (name, category, duration, intensity, user_id)
            VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5))
            RETURNING id,
            user_id AS "userId",
            timestamp
            `,
      [
        exercise.name,
        exercise.category,
        exercise.duration,
        exercise.intensity,
        user.email,
      ]
    );
    return results.rows[0];
  }
}

module.exports = Exercise;
