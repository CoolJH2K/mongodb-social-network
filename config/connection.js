// Require mongoose
const mongoose = require("mongoose");

// Connect to MongoDB via mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialmedia");

// Export connection
module.exports = mongoose.connection;