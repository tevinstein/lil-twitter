'use strict'
const passport = require('passport')
const User = require('../models/users')
const jwt = require('jsonwebtoken')

let allUsers = (req, res) => {
  User.find({}, (err, users) => {
    if(err) res.status(400).json({'error': `Error: ${err}`})
    if(!users) res.status(404).json({'message': 'Failed to get all users'})
    console.log(`get all users`);
    res.status(200).json(users)
  })
}

let editUser = (req, res) => {
  User.findOneAndUpdate({
    _id : req.params.id
  }, req.body, {
    new: true
  }, (err, updated_user) => {
    console.log('...........', updated_user)
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!updated_user) res.status(404).json({'message': 'Failed to update user'})

    res.status(200).json(updated_user)
  })
}

let deleteUser = (req, res) => {
  console.log(`params: ${req.params.id}`);
  User.findOneAndRemove({
    _id : req.params.id
  }, (err, deleted_user) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!deleted_user) res.status(404).json({'message': 'Failed to delete user'})
    console.log(deleted_user);
    res.status(200).json(deleted_user)
  })
}

let registerLocalUser = (req, res, next) => {
  console.log(`register`);
  console.log(req.body);

  User.register(new User({
    username : req.body.username,
    email : req.body.email,
    avatar : req.body.avatar
  }),
  req.body.password,
  (err, new_user) => {
    if(err) res.status(400).json({'error': `Register Error: ${err}`})
    if(!new_user) res.status(404).json({'message': 'Failed to register a user'})

    passport.authenticate('local', {
      successRedirect: '/',
      successFlash: true,
      // failureRedirect: '/register',
      failureFlash: true
    }, (err, user, info) => {
      if(err) return res.status(400).json({'error': `Login Error: ${err}`})
      if(!user) return res.status(404).json({'message': 'Register succeded but sign in falied'})

      return res.status(200).json({
        token: jwt.sign({
          sub: user._id,
          username: user.username,
          avatar: user.avatar
        }, 'secret')
      })
    })(req, res, next)
  })
}

let loginUser = (req, res, next) => {
  passport.authenticate('local',
  {},
  (err, user, info) => {
      console.log(user)
      if(err){
        return res.json(err)
      }else {
        return res.status(200).json({
          token: jwt.sign({
            sub: user._id,
            username: user.username
          }, 'secret')
        })
      }

  })(req, res, next)
}

module.exports = {
  allUsers   : allUsers,
  editUser   : editUser,
  deleteUser : deleteUser,
  registerLocalUser : registerLocalUser,
  loginUser  : loginUser
}