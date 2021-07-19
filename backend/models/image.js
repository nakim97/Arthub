const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Image {
  static async listImagesForUser({ user }) {
    const results = await db.query(
      `
    SELECT pu.id AS "photoUploadId",
    pu.post_img_url AS "postImageUrl",
    pu.type AS "type",
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
            INSERT INTO photoUpload (post_img_url, type, user_id)
            VALUES ($1, $2, (SELECT id FROM users WHERE email = $3))
            RETURNING id,
            user_id AS "userId"
            `,
      [image.postImageUrl, image.type, user.email]
    );
    return results.rows[0];
  }
}
module.exports = Image;
