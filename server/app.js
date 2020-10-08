const express = require('express')
const bodyParser = require('body-parser')

const PostMail = require('./api/mail')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/mail', PostMail )

app.use(express.static('public')) 

module.exports = app 