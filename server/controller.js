module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        let newUser = await db.register_user({ username, password })
        res.status(200).send(newUser)
    },
    login: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        let user = await db.user_login({ username, password })
        res.status(200).send(user)
    }
}