const { UnauthorizedError, ForbiddenError } = require("../utils/errors");
const db = require("../db");
const User = require("../models/user");

class Like {
  static async postLike({ user, post_id }) {
    if (!user) {
      throw new UnauthorizedError(`There is no user logged in.`);
    }
    const myUser = await User.fetchUserByEmail(user.email);
    // Look up the post in the likes table and add the user id to the array
    // All the order by's take the latest id and uses that as a new id is created per like
    const query = `
        SELECT likes FROM photoLikes
        WHERE post_id = $1
        ORDER BY id DESC
        `;

    const results = await db.query(query, [post_id]);
    // This should get an array of likes
    let arr = [];

    const theResult = results.rows[0];
    for (let like in theResult["likes"]) {
      // This gets all the likes from all the users in the likes column
      // Then it goes in to make an actual array with the 0 index
      if (theResult["likes"][like] == undefined) continue;

      // For this statement, if the user id already exists in the user, throw an error
      if (theResult["likes"][like][0] != myUser["id"].toString())
        arr.push(theResult["likes"][like]);
      else {
        throw new ForbiddenError(`User cannot add more than one like.`);
      }
    }
    //  console.log(arr)
    // Just in case there are no likes, create an empty array
    if (!arr) arr = [];
    // // This gets a new object with our user
    let obj = [myUser["id"].toString(), myUser["username"]];
    // This adds the new object of user things to the array
    arr.push(obj);

    // Put the array back in
    const queryf = `
    INSERT INTO photoLikes (post_id, likes)
        VALUES ($1, $2)
        RETURNING id, likes, post_id
        `;
    const resultsf = await db.query(queryf, [post_id, arr]);
    return resultsf.rows[0];
  }

  static async fetchAllLikes({ postsId }) {
    // fetch a user's comment for a post if it exists
    const results = await db.query(
      `
          SELECT *
          FROM photoLikes AS pl
                `,
      [postsId]
    );

    return results.rows;
  }

  static async fetchLikesForPost({ postsId }) {
    // fetch the likes for a post if it exists
    const results = await db.query(
      `
          SELECT *
          FROM photoLikes AS pl
          WHERE post_id = $1
          ORDER BY id DESC
                `,
      [postsId]
    );

    return results.rows[0];
  }

  static async deleteLike({ user, post_id }) {
    if (!user) {
      throw new UnauthorizedError(`There is no user logged in.`);
    }
    let flag = false;
    const myUser = await User.fetchUserByEmail(user.email);
    // Look up the post in the likes table and add the user id to the array
    const query = `
        SELECT likes FROM photoLikes
        WHERE post_id = $1
        ORDER BY id DESC
        `;

    const results = await db.query(query, [post_id]);
    // This should get an array of likes
    let arr = [];

    const theResult = results.rows[0];

    for (let like in theResult["likes"]) {
      flag = true;
      // This gets all the likes from all the users in the likes column
      // Then it goes in to make an actual array with the 0 index

      if (theResult["likes"][like] == undefined) {
        continue;
      }

      arr.push(theResult["likes"][like]);
    }
    if (!flag && arr.length <= 0) {
      throw new ForbiddenError(`There was no like to delete`);
    }
    for (let dLike in arr) {
      // This gets all the likes from all the users in the likes column
      // Then it goes in to make an actual array with the 0 index
      if (!arr) break;

      // For this statement, if the user id already exists in the user, throw an error
      if (arr[dLike][0] == myUser["id"].toString()) {
        arr.pop(arr[dLike]);

        break;
      } else if (
        arr[dLike][0] != myUser["id"].toString() &&
        dLike != arr.length - 1
      ) {
        continue;
      } else {
        // We reached the end of the array without finding anything
        throw new ForbiddenError(`There was no like to delete`);
      }
    }

    // Just in case there are no likes, create an empty array
    if (!arr) {
      arr = [];
      throw new ForbiddenError(`There was no like to delete`);
    }
    // Put the array back in
    const queryd = `
        DELETE FROM photoLikes
        WHERE post_id = $1
        `;

    const resultsd = await db.query(queryd, [post_id]);
    const queryf = `
    INSERT INTO photoLikes (post_id, likes)
        VALUES ($1, $2)
        RETURNING id, likes, post_id
        `;
    const resultsf = await db.query(queryf, [post_id, arr]);
    return resultsf.rows[0];
  }
}

module.exports = Like;
