const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
  user1: { type: String, required: true },
  user2: { type: String, required: true },
});

// Export model
module.exports = mongoose.model("Thread", ThreadSchema);
