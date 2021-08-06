const { BadRequestError } = require("../utils/errors");
const db = require("../db");

class Post {
  static async listAllPosts() {
    const results = await db.query(
      `
      SELECT pp.id AS "photoPostId",
    pp.post_title AS "postTitle",
    pp.post_description AS "postDescription",
    img.id AS "imgId",
    img.post_img_url AS "imgPostUrl"
    FROM photoPost AS pp
    JOIN photoUpload AS img ON img.id = pp.img_id
    `
    );
    return results.rows;
  }

  static async listAllPostsL4() {
    const results = await db.query(
      `
      SELECT pp.id AS "photoPostId",
    pp.post_title AS "postTitle",
    pp.post_description AS "postDescription",
    img.id AS "imgId",
    img.post_img_url AS "imgPostUrl"
    FROM photoPost AS pp
    JOIN photoUpload AS img ON img.id = pp.img_id
    ORDER BY pp.id ASC
    LIMIT 6
    `
    );
    return results.rows;
  }
  static async listAllPostsHL4() {
    const results = await db.query(
      `
      SELECT pp.id AS "photoPostId",
    pp.post_title AS "postTitle",
    pp.post_description AS "postDescription",
    img.id AS "imgId",
    img.post_img_url AS "imgPostUrl"
    FROM photoPost AS pp
    JOIN photoUpload AS img ON img.id = pp.img_id
    ORDER BY pp.id DESC
    LIMIT 4
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
    img.id AS "imgId",
    img.post_img_url AS "imgPostUrl",
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

  static async listPhotoPostsWithUser(id) {
    const results = await db.query(
      `
    SELECT pp.id AS "photoPostId",
    pp.post_title AS "postTitle",
    pp.post_description AS "postDescription",
    img.id AS "imgId",
    img.post_img_url AS "imgPostUrl"
    FROM photoPost AS pp
    JOIN users AS u ON u.id = pp.user_id
    JOIN photoUpload AS img ON img.id = pp.img_id
    WHERE u.id = $1
    `,
      [id]
    );
    return results.rows;
  }

  static async fetchPhotoPostById(postId) {
    if (!postId) {
      throw new BadRequestError("No id provided");
    }

    const query = `SELECT * FROM photoPost AS pp
    JOIN users AS u ON u.id = pp.user_id
    JOIN photoUpload AS img ON img.id = pp.img_id
    WHERE pp.id = $1`;
    const result = await db.query(query, [postId]);
    const post = result.rows[0];
    return post;
  }

  static async deletePhotoPostById(postId) {
    if (!postId) {
      throw new BadRequestError("No id provided");
    }
    const query = `DELETE FROM photoPost WHERE id = $1`;
    const result = await db.query(query, [postId]);
    const user = "ok";
    return user;
  }

  static async searchByTitle(query) {
    if (!query) {
      throw new BadRequestError("No search query provided");
    }
    const dbquery = `SELECT pp.id,
    pp.img_id,
    pp.post_title,
    pp.post_description,
    pp.photo_created_at,
    img.post_img_url
    FROM photoPost AS pp
    JOIN photoUpload AS img ON img.id = pp.img_id
    WHERE post_title like '%${query}%';
    `;
    const result = await db.query(dbquery);
    const queries = result.rows;
    return queries;
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
            INSERT INTO photoPost (post_title, post_description, img_id, user_id)
            VALUES ($1, $2, $3, (SELECT id FROM users WHERE email = $4))
            RETURNING id,
            user_id AS "userId",
            img_id,
            post_title,
            post_description,
            photo_created_at
            `,
      [post.postTitle, post.postDescription, post.imgId, user.email]
    );
    return results.rows[0];
  }
}

module.exports = Post;
