// Require express and thoughtController
const router = require("express").Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
    .route("/:thoughtIt")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Export router
module.exports = router;