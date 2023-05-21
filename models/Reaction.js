// Require mongoose
const {Schema, Types} = require("mongoose");

// Create reactionSchema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            required: true
        },

        createdAt: {
            type: Date,
            default: Date.now(),
        }
    },
    // Getter method
    {
       toJSON: {
        getters: true
       },
       id: false,
    }
);

// Export schema
module.exports = reactionSchema;