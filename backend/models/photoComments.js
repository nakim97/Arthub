const { BadRequestError } = require("../utils/errors");
const db = require("../db");

class Comment {
  static async fetchCommentForPostByUser({ user, postsId }) {
    // fetch a user's comment for a post if it exists
    const results = await db.query(
      `
            SELECT id, user_id, post_id, comment_created_at
            FROM photoComments
            WHERE user_id = ( SELECT id FROM users WHERE email = $1)
                AND post_id = $2
            `,
      [user.email, postsId]
    );
    return results.rows[0];
  }
  static async createCommentsForPost({ comment, user, postsId }) {
    // Check if user has already added a comment for this post
    // Throw an error if user has already added a comment
    const existingComment = await Comment.fetchCommentForPostByUser({
      user,
      postsId,
    });
    if (existingComment) {
      throw BadRequestError(
        `Users are not allowed to leave multiple comments for a single post`
      );
    }
    const results = await db.query(
      `
            INSERT INTO photoComments(comment_description, id, user_id, post_id)
            VALUES ($1,$2,$3,$4, (SELECT id FROM users WHERE email = $5))
            RETURNING comment_description, id, user_id,post_id, comment_created_at
            `,
      [comment, user.email, postsId]
    );
    return results.rows[0];
  }
}

module.exports = Comment;
