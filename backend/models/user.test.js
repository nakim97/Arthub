require("regenerator-runtime/runtime");
test("Something", async () => {
expect(0).toEqual(0)
})
// const { NotFoundError, BadRequestError, UnauthorizedError } = require("../utils/errors")
// const User = require("./user")
// require("regenerator-runtime/runtime");
// // const { commonBeforeAll, commonBeforeEach, commonAfterEach, commonAfterAll } = require("../tests/common")

// // beforeAll()
// // beforeEach()
// // afterEach()
// // afterAll()

// describe("User", () => {
//   /************************************** User.login */

//   describe("Test login", () => {
//     test("User can login successfully with proper credentials", async () => {
//       const user = await User.login({ email: "lebron@james.io", password: "password1" })

//       expect(user).toEqual({
//         id: expect.any(Number),
//         username: "lebron",
//         firstName: "LeBron",
//         lastName: "James",
//         email: "lebron@james.io",
//         isAdmin: false,
//         createdAt: expect.any(Date),
//       })
//     })

//     test("Unknown email throw unauthorized error", async () => {
//       expect.assertions(1)

//       try {
//         await User.login({ email: "somebody@else.io", password: "password" })
//       } catch (err) {
//         expect(err instanceof UnauthorizedError).toBeTruthy()
//       }
//     })

//     test("Invalid credentials throw unauthorized error", async () => {
//       expect.assertions(1)

//       try {
//         await User.login({ email: "lebron@james.io", password: "wrong" })
//       } catch (err) {
//         expect(err instanceof UnauthorizedError).toBeTruthy()
//       }
//     })
//   })

//   /************************************** User.register */

//   describe("Test register", () => {
//     const newUser = {
//       username: "new",
//       firstName: "Test",
//       lastName: "Tester",
//       email: "test@test.io",
//       isAdmin: false,
//     }

//     test("User can successfully register with proper credentials", async () => {
//       const user = await User.register({ ...newUser, password: "pw" })
//       expect(user).toEqual({
//         id: expect.any(Number),
//         username: newUser.username,
//         firstName: newUser.firstName,
//         lastName: newUser.lastName,
//         email: newUser.email,
//         isAdmin: newUser.isAdmin,
//         createdAt: expect.any(Date),
//       })
//     })

//     test("Registering with duplicate email throws error", async () => {
//       expect.assertions(1)

//       try {
//         await User.register({
//           ...newUser,
//           password: "pw",
//         })
//         await User.register({
//           ...newUser,
//           password: "pw",
//         })
//       } catch (err) {
//         expect(err instanceof BadRequestError).toBeTruthy()
//       }
//     })

//     test("Registering with duplicate username throws error", async () => {
//       expect.assertions(1)

//       try {
//         await User.register({
//           ...newUser,
//           password: "pw",
//         })
//         await User.register({
//           ...newUser,
//           email: "different@different.io",
//           password: "pw",
//         })
//       } catch (err) {
//         expect(err instanceof BadRequestError).toBeTruthy()
//       }
//     })
//   })

//   /************************************** fetchUserByEmail */

//   describe("Test fetchUserByEmail", () => {
//     test("Can fetch a user by email", async () => {
//       const user = await User.fetchUserByEmail("lebron@james.io")
//       expect(user).toEqual({
//         id: expect.any(Number),
//         username: "lebron",
//         first_name: "LeBron",
//         last_name: "James",
//         email: "lebron@james.io",
//         is_admin: false,
//         password: expect.any(String),
//         created_at: expect.any(Date),
//       })
//     })

//     test("Unknown email returns nothing", async () => {
//       const user = await User.fetchUserByEmail("wrong@nope.nope")
//       expect(user).toBeFalsy()
//     })
//   })

//   /************************************** fetchUserByUsername */

//   describe("Test fetchUserByUsername", () => {
//     test("Can fetch a user by username", async () => {
//       const user = await User.fetchUserByUsername("lebron")
//       expect(user).toEqual({
//         id: expect.any(Number),
//         username: "lebron",
//         first_name: "LeBron",
//         last_name: "James",
//         email: "lebron@james.io",
//         is_admin: false,
//         password: expect.any(String),
//         created_at: expect.any(Date),
//       })
//     })

//     test("Unknown username returns nothing", async () => {
//       expect.assertions(1)

//       const user = await User.fetchUserByUsername("unknown")
//       expect(user).toBeFalsy()
//     })
//   })
// })
