const Friends = require("../models/friends");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of a users friends.
exports.friend_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Friend List");
});
// exports.friend_list = asyncHandler(async (req, res, next) => {
//   const friendsList = await Friends.find(
//     { user: userID },
//     "current requests awaitingApproval"
//   ).exec();
//   res.json(friendsList);
// });

// Handle add friend on POST.
exports.friend_request = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Request Friend");
});

// Handle add friend on POST.
exports.friend_accept_request = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Accept Friend Request");
});

// Handle remove friend on POST.
exports.friend_remove = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Remove Friend");
});

// Display if 2 users are friends on GET.
exports.friend_status = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Check If Friend");
});
