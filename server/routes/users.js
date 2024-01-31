const express = require("express");
const { getUser, getUserFriends, addRemoveFriend, } = require("../controllers/user.js");
const { verifyToken } = require("../middleware/auth.js");

const router = express.Router();