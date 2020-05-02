const express = require("express");
const router = express.Router();
const User = require("../models/User");

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

//** FORGOT USER NAME */
router.patch('/forgotUsername', async (req, res) => {
    try {
        const userUpdate = User.findOneAndUpdate(
            { email: req.body.email },
            { username: req.body.username }
        );
        // res.status(200).json(userUpdate);
        console.log(userUpdate);
        res.status(200).json({ message: "Updated Successfully...!" });
    } catch (error) {
        res.status(200).json({ message: error });
    }
});

//** FORGOT USER PASSWORD */
router.patch('/forgotPassword', async (req, res) => {
    try {

    } catch (error) {
        res.status(200).json({ message: error });
    }
});

//** CHANGE USER PASSWORD */
router.patch('/changePassword/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(200).json({ message: error });
    }
});

module.exports = router;