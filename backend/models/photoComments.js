const { UnauthorizedError } = require("../utils/errors");
const db = require("../db");

class Comment {
  static async postComment({ user, post_id, comment_description }) {
    if (!user) {
      throw new UnauthorizedError(`There is no user logged in.`);
    }
    const query = `INSERT INTO photoComments (user_id, post_id, comment_description)
        VALUES ((SELECT id FROM users WHERE email = $1), $2, $3)
        RETURNING id, user_id, post_id, comment_description
    `;
    console.log("This is the query" + query);
    const results = await db.query(query, [
      user.email,
      post_id,
      comment_description,
    ]);

    return results.rows[0];
  }

  static async fetchCommentForPostByUser({ postsId }) {
    // fetch a user's comment for a post if it exists
    const results = await db.query(
      `
      SELECT pc.id,
      pc.post_id,
      pc.comment_description,
      u.id AS "userId",
      pc.comment_created_at,
      u.username, u.profile_img_url
      FROM photoComments AS pc
      JOIN users AS u ON u.id = pc.user_id
      WHERE post_id = $1
            `,
      [postsId]
    );

    return results.rows;
  }
}

module.exports = Comment;
