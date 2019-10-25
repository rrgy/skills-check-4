require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING } = process.env
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')

const port = SERVER_PORT
const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)

app.listen(port, () => console.log(`${port}`))
