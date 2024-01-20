const Friends = require("../models/friends");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of a users threads.
exports.thread_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Thread List");
});

// Display is thread exists
exports.thread_check = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Thread Check");
});

// Display Messages in thread.
exports.thread_messages = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Messages in Thread");
});
