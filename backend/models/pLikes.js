const { UnauthorizedError, ForbiddenError } = require("../utils/errors");
const db = require("../db");
const User = require("../models/user")

class Like {
  static async postLike({ user, post_id }) {
    if (!user) {
      throw new UnauthorizedError(`There is no user logged in.`);
    }
    const myUser = await User.fetchUserByEmail(user.email)
    // Look up the post in the likes table and add the user id to the array
    const query = `
        SELECT likes FROM photoLikes
        WHERE post_id = $1;
        `;

    const results = await db.query(query, [post_id]);
    // This should get an array of likes
    let arr = [];
     for (let like in results.rows) {
       // This gets all the likes from all the users in the likes column
       // Then it goes in to make an actual array with the 0 index
       if (results.rows[like]["likes"][0][0] != myUser["id"].toString())
        arr.push(results.rows[like]["likes"][0]);
        else {
          throw new ForbiddenError(`User cannot add more than one like.`);
        }
     }
     console.log("arr", arr);
    // Just in case there are no likes, create an empty array
    if (!arr) arr = [];
    // // This gets a new object with our user
    let obj = [myUser["id"].toString(), myUser["username"]];
    // This adds the new object of user things to the array
    arr.push(obj);
    console.log("arr2", arr);
    // Put the array back in
    const queryf = `
    INSERT INTO photoLikes (post_id, likes)
        VALUES ($1, $2)
        RETURNING id, likes, post_id
        `;
    const resultsf = await db.query(queryf, [post_id, arr]);
    return resultsf.rows[0];
  }

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
