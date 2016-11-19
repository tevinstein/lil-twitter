'use strict'

//==========CONFIG==========

require('dotenv').config()

//==========GRAB DEPENDENCIES==========

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),

    //Initiate Express
    app = express(),
    router = express.Router(),

    //Data and modeling
    mongoose = require('mongoose'),

    //JSONWebToken
    jwt = require('jsonwebtoken'),

    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,

    //App modules
    apiTweets = require('./routes/api.tweets'),
    apiUsers = require('./routes/api.users'),

    //User model
    User = require('./models/users')

//==========APP CONFIGURATION==========

//Express
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

//MongoDB
mongoose.Promise = global.Promise // native Node.js promise
mongoose.connect(process.env.MONGODB_URI)

//Passport Configuration
passport.use(new LocalStrategy(User.authenticate()))

//==========REGISTER ROUTES==========

app.use('/api/tweets', apiTweets)
app.use('/api/users', apiUsers)

//==========RUN THE APP==========

const host = process.env.HOST || "localhost",
    port = process.env.PORT || "3000"

app.listen(port, host, (err) => {
    if (err) console.log(err)
    console.log(`Server is running on ${host}:${port}`)
})
