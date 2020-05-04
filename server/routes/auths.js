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
        const userUpdate = await User.findOneAndUpdate(
            { email: req.body.email },
            { username: req.body.username }
        );
        if (userUpdate)
            res.status(200).json({ status: true, message: "Username updated successfully." });
        else
            res.status(200).json({ status: false, message: "EmailID not found." });
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});

//** FORGOT USER PASSWORD */
router.patch('/forgotPassword', async (req, res) => {
    try {
        const userUpdate = await User.findOneAndUpdate(
            { email: req.body.email },
            { password: req.body.password }
        );
        if (userUpdate)
            res.status(200).json({ message: "Password updated successfully." });
        else
            res.status(200).json({ status: false, message: "EmailID not found" });
    } catch (error) {
        res.status(500).json({ status: false, message: error });
    }
});

//** CHANGE USER PASSWORD */
router.patch('/changePassword/:id', async (req, res) => {
    try {
        const userUpdate = await User.updateOne(
            { _id: req.params.id },
            { password: req.body.password, modified_by: req.params.id, modified_on: Date.now() }
        );
        if (userUpdate)
            res.status(200).json({ status: true, message: "Password changed successfully." });
        else
            res.status(200).json({ status: false, message: "Something went wrong." });
    } catch (error) {
        res.status(200).json({ message: error });
    }
});

module.exports = router;