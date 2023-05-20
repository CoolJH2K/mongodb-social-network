// Require mongoose and reactionSchema
const {Schema, Types} = require("mongoose");
const reactionSchema = require("./Reaction");

// Create thoughtSchema
const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        reactions: [reactionSchema],
    },
    // Getter method
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// Create Thought model
const Thought = mongoose.model("Thought", thoughtSchema);