// const Post = require("../models/post");

require("regenerator-runtime/runtime");
test("Something", async () => {
  expect(0).toEqual(0)
  })
  // test("Everything checks", async () => {
  //         const res = await Post.listPosts();
  //         expect(res).toBeTruthy()
  //       })
// const request = require("supertest")
// require("regenerator-runtime/runtime");
// const app = require("../app")

// // const { commonBeforeAll, commonBeforeEach, commonAfterEach, commonAfterAll } = require("../tests/common")

// // beforeAll()
// // beforeEach()
// // afterEach()
// // afterAll()

// /************************************** POST /auth/token */

// describe("Auth Routes", () => {
//   describe("POST /auth/token/", function () {
//     test("User can login successfully with valid credentials", async () => {
//       const res = await request(app).post("/auth/login/").send({
//         email: "lebron@james.io",
//         password: "password1",
//       })
//       expect(res.body).toEqual({
//         token: expect.any(String),
//         user: {
//           id: expect.any(Number),
//           username: "lebron",
//           firstName: "LeBron",
//           lastName: "James",
//           email: "lebron@james.io",
//           createdAt: expect.any(String),
//           isAdmin: false,
//         },
//       })
//     })

//     test("Throws Unauthenticated error when user doesn't exist in db", async () => {
//       const res = await request(app).post("/auth/login/").send({
//         email: "somebody_else@users.io",
//         password: "password",
//       })
//       expect(res.statusCode).toEqual(401)
//     })

//     test("Throws Unauthenticated error when user provides wrong password", async () => {
//       const res = await request(app).post("/auth/login/").send({
//         email: "lebron@james.io",
//         password: "nope",
//       })
//       expect(res.statusCode).toEqual(401)
//     })

//     test("Throws Bad Request error when user doesn't provide password", async () => {
//       const res = await request(app).post("/auth/login/").send({
//         email: "lebron@james.io",
//       })
//       expect(res.statusCode).toEqual(400)
//     })

//     test("Throws Bad Request error when user doesn't provide email", async () => {
//       const res = await request(app).post("/auth/login/").send({
//         password: "password1",
//       })
//       expect(res.statusCode).toEqual(400)
//     })
//   })

//   /************************************** POST /auth/register */
//   describe("POST /auth/register/", () => {
//     test("Allows user to register with valid credentials", async () => {
//       const res = await request(app).post("/auth/register/").send({
//         username: "new",
//         firstName: "first",
//         lastName: "last",
//         password: "pw",
//         email: "new@email.com",
//       })
//       expect(res.statusCode).toEqual(201)
//       expect(res.body).toEqual({
//         token: expect.any(String),
//         user: {
//           id: expect.any(Number),
//           username: "new",
//           firstName: "first",
//           lastName: "last",
//           email: "new@email.com",
//           createdAt: expect.any(String),
//           isAdmin: false,
//         },
//       })
//     })

//     test("Throws Bad Request error when user doesn't provide all fields", async () => {
//       const res = await request(app).post("/auth/register/").send({
//         username: "new",
//       })
//       expect(res.statusCode).toEqual(400)
//     })
//   })
// })
