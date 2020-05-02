const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    modified_by: {
        type: String,
        required: true
    },
    modified_on: {
        type: Date,
        default: Date.now
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Users', postSchema);