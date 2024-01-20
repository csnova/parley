const Message = require("../models/messages");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display Message Details.
exports.message_details = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Message Details");
});

// Handle create message.
exports.message_create = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: New");
});
