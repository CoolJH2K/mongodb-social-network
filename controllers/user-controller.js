// Require model
const {User} = require("../models");

module.exports = {
    // GET all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // GET a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId})
                .select("-__v");
        
        if (!user) {
            return res.status(404).json({message: "No user with that ID"});
        }

        res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // CREATE a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.json(500).json(err);
        }
    },
    // UPDATE a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body}
            );
        
        if (!user) {
            return res.status(404).json({message: "No user with that ID"});
        }

        res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // DELETE a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({_id: req.params.userId});
        
        if (!user) {
            return res.status(404).json({message: "No user with that ID"});
        }
        
        res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};