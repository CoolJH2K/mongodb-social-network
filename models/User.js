// Require mongoose, thougthSchema, and userSchema
const {Schema, Types, model} = require("mongoose");
const thoughtSchema = require("./Thought");
const userScehma = require("./User");

// Create userSchema
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [thoughtSchema],
    }
);

// Create User model
const User = model("User", userSchema);