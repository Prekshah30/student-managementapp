const express = require('express');
const router = express.Router();

// importing controllers

// importing user controller
const {createUser,loginUser, getAllUsers, sendFriendRequest} =require('../controllers/Usercontroller')

// creating routes

// User login signup routes
router.post('/createUser',createUser)
router.post('/loginUser',loginUser)


// get all users
router.get('/users',getAllUsers)


// send friend request
router.post('/send-friend-request', sendFriendRequest);



// exporting routes as single router
module.exports = router;