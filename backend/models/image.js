const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Image {
  static async listImagesForUser({ user }) {
    const results = await db.query(
      `
    SELECT pu.id AS "photoUploadId",
    pu.post_img_url AS "postImgUrl",
    u.email AS "userEmail"
    FROM photoUpload AS pu
    JOIN users AS u ON u.id = pu.user_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    `,
      [user.email]
    );
    return results.rows;
  }

  static async createImage({ image, user }) {
    if (!image || !Object.keys(image).length) {
      throw new BadRequestError("No image info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    const results = await db.query(
      `
      INSERT INTO photoUpload (post_img_url, user_id)
      VALUES ($1, (SELECT id FROM users WHERE email = $2))
      RETURNING id,
      user_id AS "userId"
      `,
      [image.postImgUrl, user.email]
    );
    return results.rows[0];
  }

  static async listForumImagesForUser({ user }) {
    const results = await db.query(
      `
    SELECT fu.id AS "forumUploadId",
    fu.forum_img_url AS "forumImgUrl",
    u.email AS "userEmail"
    FROM forumUpload AS fu
    JOIN users AS u ON u.id = fu.user_id
    WHERE u.id = (SELECT id FROM users WHERE email = $1)
    `,
      [user.email]
    );
    return results.rows;
  }
  static async createForumImage({ image, user }) {
    if (!image || !Object.keys(image).length) {
      throw new BadRequestError("No image info provided");
    }
    if (!user) {
      throw new BadRequestError("No user provided");
    }
    const results = await db.query(
      `
            INSERT INTO forumUpload (forum_img_url, user_id)
            VALUES ($1, (SELECT id FROM users WHERE email = $2))
            RETURNING id,
            user_id AS "userId"
            `,
      [image.forumImgUrl, user.email]
    );
    return results.rows[0];
  }
}
module.exports = Image;
