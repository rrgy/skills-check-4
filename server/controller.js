const bcrypt = require('bcryptjs')
module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        const result = await db.user_login(username)
        const user = result[0]
        if (user) {
            return res.status(409).send('User exists')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const register = await db.register_user(username, hash)
        const newUser = register[0]
        req.newUser = { username: newUser.username, id: user.id }
        res.status(200).send(req.newUser)
    },
    login: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        const findUser = await db.user_login(username)
        const foundUser = findUser[0]
        if (!foundUser) {
            return res.status(401).send('User not found')
        }
        const authenticated = bcrypt.compareSync(password)
        if (authenticated) {
            delete foundUser.password
            req.user = foundUser
            return res.status(200).send(req.foundUser)
        } else {
            res.status(401).send('Incorrect password')
        }

    },
    getPosts: (req, res) => {
        const { userPosts, search } = req.query
        const db = req.app.get('db')
        const result = db.get_posts([posts])
        // if (userPosts === true && search) {
        //     res.status(200).send(result)
        // }
    }
}