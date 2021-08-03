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
      pc.comment_created_at,
      u.id AS "userId",
      u.username, u.profile_img_url
      FROM photoComments AS pc
      JOIN users AS u ON u.id = pc.user_id
      WHERE post_id = $1
      ORDER BY pc.comment_created_at DESC
            `,
      [postsId]
    );

    return results.rows;
  }

  static async postForumComment({ user, post_id, comment_description }) {
    if (!user) {
      throw new UnauthorizedError(`There is no user logged in.`);
    }
    const query = `INSERT INTO forumComments (user_id, forum_id, comment_description)
        VALUES ((SELECT id FROM users WHERE email = $1), $2, $3)
        RETURNING id, user_id, forum_id, comment_description
    `;
    const results = await db.query(query, [
      user.email,
      post_id,
      comment_description,
    ]);

    return results.rows[0];
  }

  static async fetchCommentForForumPostByUser({ postsId }) {
    // fetch a user's comment for a post if it exists
    const results = await db.query(
      `
      SELECT fc.id,
      fc.forum_id,
      fc.comment_description,
      fc.comment_created_at,
      u.id AS "userId",
      u.username, u.profile_img_url
      FROM forumComments AS fc
      JOIN users AS u ON u.id = fc.user_id
      WHERE forum_id = $1
      ORDER BY fc.comment_created_at DESC
            `,
      [postsId]
    );

    return results.rows;
  }
}

module.exports = Comment;
