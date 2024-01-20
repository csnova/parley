const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  current: { type: Array, required: true },
  requests: { type: Array, required: true },
  awaitingApproval: { type: Array, required: true },
});

// Export model
module.exports = mongoose.model("Friends", FriendsSchema);
