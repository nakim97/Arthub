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
            pc.comment_description
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

//   static async createCommentsForPost({ comment, user, postsId }) {
//     // Check if user has already added a comment for this post
//     // Throw an error if user has already added a comment
//     const existingComment = await Comment.fetchCommentForPostByUser({
//       user,
//       postsId,
//     });
//     if (existingComment) {
//       throw BadRequestError(
//         `Users are not allowed to leave multiple comments for a single post`
//       );
//     }
//     const results = await db.query(
//       `
//             INSERT INTO photoComments(comment_description, id, user_id, post_id)
//             VALUES ($1,$2,$3,$4, (SELECT id FROM users WHERE email = $5))
//             RETURNING comment_description, id, user_id,post_id, comment_created_at
//             `,
//       [comment, user.email, postsId]
//     );
//     return results.rows[0];
//   }
// }

// module.exports = Comment;
