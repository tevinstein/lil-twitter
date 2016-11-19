const mongoose = require('mongoose'),
    Schema = mongoose.Schema

const Tweet = new Schema({
    tweet: String,
    user: String,
    createdAt: { type: Date, default: Date.now },
    avatar: String
}, {
    timestamps: true
})

Tweet.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('Tweet', Tweet)
