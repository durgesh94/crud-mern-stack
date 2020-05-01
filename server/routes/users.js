const express = require("express");
const router = express.Router();
const User = require("../models/User");

//** GET ALL USERS */
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** ADD NEW USER */
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });
    try {
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** USER LOGIN */
router.post('/login', async (req, res) => {
    try {
        const user = await User.find({ username: req.body.username, password: req.body.password });
        if (user.length > 0)
            res.status(200).json({
                status: true,
                userId: user[0].id,
                message: "User login successfully."
            });
        else
            res.status(401).json({
                status: false,
                userId: null,
                message: "Username or password is wrong."
            });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error
        });
    }
});

module.exports = router;