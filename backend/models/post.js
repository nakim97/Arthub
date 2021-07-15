const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Post {
  static async listProducts() {
    // list all items in the products array
    const products = storage.get("products").value();
    return products;
  }
  static async listOrders(carts, users) {
    // list all items in the products array
    const cart = order.get("cart").value();
    //console.log("Cart time",cart[0])
    const user = order.get("userInfo").value();
    //console.log('user',user[0])
    //console.log("User time",user)
    const products = storage.get("products").value();
    let i = 0;
    let count = 0;
    let productRows = [];
    let cartst = JSON.stringify(carts);
    let userst = JSON.stringify(users);
    // for (let x in cart) {
    //   console.log(cart[x]);
    // }
    // cart.forEach((field) => {
    for (let field in cart[0]) {
      //  console.log("field",field);
      // for (let x in field) {

      // // }
      for (let product in products) {
        // console.log("1",products[product]['name'],"2",field)
        if (products[product]["name"] == field) {
          count += products[product]["price"] * cart[0][field];
          // console.log("pr",products[product])
          productRows.push(products[product]);
        }
      }
      // i++;
    }
    // }
    // })
    let pr = JSON.stringify(productRows);
    var subtotal = count;
    var total = count + count * 0.07;
    var lines = `Showing receipt for ${user[0]["name"]} available at ${user[0]["email"]}
    ${cartst}
    Before taxes, the subtotal was ${subtotal},
    After taxes and fees were applied, the total is ${total}
    `;
    const string = {
      name: `${user[0]["name"]}`,
      email: `${user[0]["email"]}`,
      total: `${total}`,
      receipt: `${userst}`,
      lines: `${lines}`,
      productRows: `${pr}`,
    };
    let myJSON = JSON.stringify(string);
    return string;
  }

  static async fetchProductsById(productId) {
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
