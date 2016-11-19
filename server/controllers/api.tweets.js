//DATA WITH MONGOOSE MODEL

const Tweet = require('../models/tweets')

//CONTROLLING

module.exports = {
  //get all
  getDatas: (req, res) => {
    var query = Tweet.find({})

    if(req.query.tweet){
      query = Tweet.find({
        tweet: {$in: req.query.tweet}
      })
    }

    query.exec((err, data) => {
      if (err) res.status(400).json({ 'error': `Error: ${err}` })
      if (!data) res.status(404).json({ 'message': 'Failed to get all' })
      res.status(200).json(data)
    })
  },

  //post one
  postData: (req, res) => {
    const tweet = {
      tweet: req.body.tweet,
      user: req.body.user,
      avatar: req.body.avatar
    }
    Tweet.create(tweet, (err, data) => {
      if (err) res.status(400).json({ 'error': `Error: ${err}` })
      if (!data) res.status(304).json({ 'message': 'Failed to post' })
      res.status(200).json({'message': 'Add data successful',data})
    })
  },

  //get one
  getData: (req, res) => {
    Tweet.findOne({
      _id: req.params.id
    }, (err, data) => {
      if (err) res.status(400).json({ 'error': `Error: ${err}` })
      if (!data) res.status(404).json({ 'message': 'Failed to get' })
      res.status(200).json(data)
    })
  },

  //delete one
  deleteData: (req, res) => {
    Tweet.findOneAndRemove({
      _id: req.params.id
    }, (err, data) => {
      if (err) res.status(400).json({ 'error': `Error: ${err}` })
      if (!data) res.status(404).json({ 'message': 'No data found' })
      res.status(200).json({ 'message': `Data ${req.params.id} has been deleted` })
    })
  },

  //update one
  // updateData: (req, res) => {
  //   Tweet.findOneAndUpdate({
  //     _id: req.params.id
  //   }, {
  //     tweet: req.body.tweet,
  //     user: "@tevinstein"
  //   }, {
  //     new: true
  //     //use below to add new if data doesn't exist
  //     //upsert: true 
  //   }, (err, data) => {
  //     if (err) res.status(400).json({ 'error': `Error: ${err}` })
  //     if (!data) res.status(404).json({ 'message': 'Failed to update' })
  //     res.status(200).json({'message': 'Edit data successful',data})
  //   })
  // }
}
