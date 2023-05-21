// Require models
const {Thought, User} = require("../models");

module.exports = {
    // GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId})
                .select("-__v");

        if (!thought) {
            return res.status(404).json({message: "No thought with that ID"});
        }

        res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // CREATE a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.json(500).json(err);
        }
    },
    // UPDATE a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            );

        if (!thought) {
            return res.status(404).json({message: "No thought with that ID"});
        }

        res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // DELETE a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId});

        if (!thought) {
            return res.status(404).json({message: "No thought with that ID"});
        }
        res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};