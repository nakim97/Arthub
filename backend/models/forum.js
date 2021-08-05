const { BadRequestError } = require("../utils/errors");
const db = require("../db");

class Forum {
  static async listAllForumPosts() {
    const results = await db.query(
      `
      SELECT fp.id AS "forumPostId",
    fp.forum_title AS "forumTitle",
    fp.forum_description AS "forumDescription",
    img.id AS "imgId",
    img.forum_img_url AS "imgPostUrl"
    FROM forumPost AS fp
    JOIN forumUpload AS img ON img.id = fp.img_id
    `
    );
    return results.rows;
  }

  static async listAllForumPostsD4() {
    const results = await db.query(
      `
    SELECT fp.id AS "forumPostId",
    fp.forum_title AS "forumTitle",
    fp.forum_description AS "forumDescription",
    fp.forum_created_at AS "forumCreatedAt",
    u.id AS "userId",
    img.id AS "imgId",
    img.forum_img_url AS "imgPostUrl"
    FROM forumPost AS fp
    JOIN forumUpload AS img ON img.id = fp.img_id
    JOIN users AS u ON u.id = fp.user_id
    LIMIT 4
    `
    );
    return results.rows;
  }
  static async listForumPostsForUser({ user }) {
    const results = await db.query(
      `
    SELECT fp.id AS "forumPostId",
    fp.forum_title AS "forumTitle",
    fp.forum_description AS "forumDescription",
    img.id AS "imgId",
    img.forum_img_url AS "imgPostUrl",
    u.email AS "userEmail"
    FROM forumPost AS fp
    JOIN users AS u ON u.id = fp.user_id
    JOIN forumUpload AS img ON img.id = fp.img_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    `,
      [user.email]
    );
    return results.rows;
  }
  static async fetchForumPostById(postId) {
    if (!postId) {
      throw new BadRequestError("No id provided");
    }

    const query = `SELECT * FROM forumPost AS fp
    JOIN users AS u ON u.id = fp.user_id
    JOIN forumUpload AS img ON img.id = fp.img_id
    WHERE fp.id = $1`;
    const result = await db.query(query, [postId]);
    const post = result.rows[0];
    return post;
  }
  static async deleteForumPostById(postId) {
    if (!postId) {
      throw new BadRequestError("No id provided");
    }
    const query = `DELETE FROM forumPost WHERE id = $1`;
    const result = await db.query(query, [postId]);
    const user = "ok";
    return user;
  }

  static async searchByForumTitle(query) {
    if (!query) {
      throw new BadRequestError("No search query provided");
    }
    const dbquery = `Select * from forumPost where forum_title like '%${query}%';
    `;
    const result = await db.query(dbquery);
    const queries = result.rows;
    return queries;
  }

  static async createForumPost({ post, user }) {
    if (!post || !Object.keys(post).length) {
      throw new BadRequestError("No forum info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    const results = await db.query(
      `
            INSERT INTO forumPost (forum_title, forum_description, img_id, user_id)
            VALUES ($1, $2, $3, (SELECT id FROM users WHERE email = $4))
            RETURNING id,
            user_id AS "userId",
            img_id,
            forum_title,
            forum_description,
            forum_created_at
            `,
      [post.forumTitle, post.forumDescription, post.imgId, user.email]
    );
    return results.rows[0];
  }
}

module.exports = Forum;
