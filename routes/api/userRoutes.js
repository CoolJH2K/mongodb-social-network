// Require express and userController
const router = require("express").Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router
    .route("/:userId")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// Export router
module.exports = router;