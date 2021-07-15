const { BadRequestError } = require("../utils/errors");
const db = require("../db");
const { storage } = require("../data/storage");

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

  static async fetchPostsById(productId) {
    // fetch a single product
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return product;
  }

  static async recordProducts(product) {
    // create a new product
    //console.log(product);
    if (!product) {
      throw new BadRequestError(`No product sent.`);
    }
    const requiredFields = ["description", "category", "price"];
    requiredFields.forEach((field) => {
      if (!product[field] && product[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in product`);
      }
    });

    const products = await Store.listProducts();
    const productId = products.length + 1;
    const postedAt = new Date().toISOString();

    const newProduct = { id: productId, postedAt, ...product };

    storage.get("products").push(newProduct).write();

    return newProduct;
  }

  static async recordCart(cart) {
    // create a new product
    //console.log(product);
    if (!cart) {
      throw new BadRequestError(`No cart sent.`);
    }
    // const requiredFields = ["description", "category", "price"];
    // requiredFields.forEach((field) => {
    //   if (!product[field] && product[field] !== 0) {
    //     throw new BadRequestError(`Field: "${field}" is required in product`);
    //   }
    // });

    // const products = await Store.listProducts();
    // const productId = products.length + 1;
    // const postedAt = new Date().toISOString();

    const newCart = { ...cart };

    order.get("cart").push(newCart).write();

    return newCart;
  }
  static async recordUser(user) {
    // create a new user
    //console.log(product);
    if (!user) {
      throw new BadRequestError(`No user info sent`);
    }
    const requiredFields = ["name", "email"];
    requiredFields.forEach((field) => {
      if (!user[field] && user[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in product`);
      }
    });

    // const products = await Store.listProducts();
    // const productId = products.length + 1;
    // const postedAt = new Date().toISOString();

    const newUser = { ...user };

    order.get("userInfo").push(newUser).write();

    return newUser;
  }
}

module.exports = Post;
