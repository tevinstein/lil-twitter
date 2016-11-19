const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMonggose = require('passport-local-mongoose'),
    Tweet = require('./tweets')

const User = new Schema({
    username: String,
    email: String,
    password: String,
    avatar: String
    //tweetList: [ { type: Schema.Types.ObjectId, ref: 'Tweet' } ]
}, {
    timestamps: true
})

User.plugin(passportLocalMonggose)

module.exports = mongoose.model('User', User)
