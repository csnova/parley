const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
  users: { type: Array, required: true },
});

// Export model
module.exports = mongoose.model("Thread", ThreadSchema);
