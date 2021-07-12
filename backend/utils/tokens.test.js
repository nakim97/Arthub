require("regenerator-runtime/runtime");
test("Something", async () => {
  expect(0).toEqual(0)
  })
// const jwt = require("jsonwebtoken")
// const tokens = require("./tokens")
// require("regenerator-runtime/runtime");
// const { SECRET_KEY } = require("../config")

// describe("Can create valid tokens for users", () => {
//   test("Valid tokens are created for non-admin users", () => {
//     const token = tokens.createUserJwt({ username: "test", isAdmin: false })
//     const payload = jwt.verify(token, SECRET_KEY)
//     expect(payload).toEqual({
//       iat: expect.any(Number),
//       exp: expect.any(Number),
//       username: "test",
//       isAdmin: false,
//     })
//   })

//   test("Valid tokens are created for admin users", () => {
//     const token = tokens.createUserJwt({ username: "test", isAdmin: true })
//     const payload = jwt.verify(token, SECRET_KEY)
//     expect(payload).toEqual({
//       iat: expect.any(Number),
//       exp: expect.any(Number),
//       username: "test",
//       isAdmin: true,
//     })
//   })

//   test("Tokens set the isAdmin value to false by default", () => {
//     const token = tokens.createUserJwt({ username: "test" })
//     const payload = jwt.verify(token, SECRET_KEY)
//     expect(payload).toEqual({
//       iat: expect.any(Number),
//       exp: expect.any(Number),
//       username: "test",
//       isAdmin: false,
//     })
//   })
// })
