const express = require("express");
const { registerUser } = require("../controllers/userController");
const { authmiddleware } = require("../middlewares/authmiddleware");
const router = express.Router();
const validateUser = require("../middleware/validateUser");

router.post("/register", validateUser, registerUser);


// Register Route
router.post("/register", registerUser);

module.exports = router;

//middleware

router.get("/protected", authmiddleware, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
});
