const Order = require("../models/order") 
const { post } = require("../routes/orders")
const {BadRequestError, ForbiddenError} = require("../utils/errors")

// ensure authenticated user is owner of post
// if they aren't, throw an error
// otherwise good
const authedUserOwnsPost = async (req, res, next) => {
    try {
        const {user} = res.locals
        const {postId} = req.params
        const post = await post.fetchPostById(postId)

        if (post.userEmail !== user.email) {
            throw new ForbiddenError(`User is not allowed to update other users' posts.`)
        }

        res.locals.post = post

        return next()
    } catch (err) {
        return next(err)
    }
}

module.exports = {
    authedUserOwnsPost
}