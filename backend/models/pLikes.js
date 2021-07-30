const { UnauthorizedError } = require("../utils/errors");
const db = require("../db");

class Like {
  static async postLike({ user, post_id }) {
    if (!user) {
      throw new UnauthorizedError(`There is no user logged in.`);
    }
    // Look up the post in the likes table and add the user id to the array
    const query = `
        SELECT likes FROM photoLikes WHERE post_id = $1;
        `;

    // console.log("This is the query" + query);
    const results = await db.query(query, [post_id]);
    const myUser = userResults.id
    console.log("mU", myUser)
    // This should get an array of likes
    const arr = results.rows[0];
    console.log("arr", arr);
    // This gets a new object
    const obj = [user.id, user.username];
    console.log("obj", obj);
    // This adds the new object of user things to the array
    arr.push(obj);
    console.log("arr2", arr);
    // Put the array back in
    const queryf = `
    INSERT INTO photoLikes (post_id, likes)
        VALUES ($1, $2)
        RETURNING id, likes, post_id
        `;
    const resultsf = await db.query(queryf, [arr, post_id]);
    return resultsf.rows[0];
  }
// {
// 	"postTitle": "Something",
// 	"postDescription": "Let's do it!",
// 	"imgId": 4
// }
  static async fetchLikesForPost({ postsId }) {
    // fetch a user's comment for a post if it exists
    const results = await db.query(
      `
          SELECT *
          FROM photoLikes AS pl
          WHERE post_id = $1
                `,
      [postsId]
    );

    return results.rows;
  }
}

module.exports = Like;
