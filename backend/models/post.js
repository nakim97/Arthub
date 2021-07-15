const { BadRequestError } = require("../utils/errors");
const db = require("../db");

class Post {
  static async listAllPosts() {
    const results = await db.query(
      `
      SELECT * FROM photoPost;
      `
    );
    return results.rows;
  }
  static async listPhotoPostsForUser({ user }) {
    const results = await db.query(
      `
    SELECT pp.id AS "photoPostId",
    pp.post_title AS "postTitle",
    pp.post_description AS "postDescription",
    pp.type AS "type",
    e.intensity AS "intensity",
    img.id AS "imgId",
    u.email AS "userEmail"
    FROM photoPost AS pp
    JOIN users AS u ON u.id = pp.user_id
    JOIN photoUpload AS img ON img.id = pp.img_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    `,
      [user.email]
    );
    return results.rows;
  }
  static async fetchPhotoPostById(postId) {
    if (!postId) {
      throw new BadRequestError("No id provided");
    }

    const query = `SELECT * FROM photoPost WHERE id = $1`;
    const result = await db.query(query, [postId]);
    const user = result.rows[0];
    return user;
  }

  static async createPost({ post, user }) {
    if (!post || !Object.keys(post).length) {
      throw new BadRequestError("No post info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    const results = await db.query(
      `
            INSERT INTO photoPost (post_title, post_description, type, img_id, user_id)
            VALUES ($1, $2, $3, $4, (SELECT id FROM users WHERE email = $5))
            RETURNING id,
            user_id AS "userId",
            photo_created_at
            `,
      [
        post.post_title,
        post.post_description,
        post.type,
        post.img_id,
        user.email,
      ]
    );
    return results.rows[0];
  }
}

module.exports = Post;
