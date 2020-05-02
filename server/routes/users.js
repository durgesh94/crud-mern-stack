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
        last_name: req.body.last_name,
        is_admin: req.body.is_admin,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        modified_by: req.body.modified_by
    });
    try {
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** UPDATE USER BY ID */
router.patch('/:id', async (req, res) => {
    try {
        const user = await User.updateOne(
            { _id: req.params.id },
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** DELETE USER BY ID */
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

//** GET USER BY ID */
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
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

//** FORGOT USER NAME */
router.patch('/forgotUsername', async (req, res) => {
    try {

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