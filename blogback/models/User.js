const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true, min: 8 },
    email: { type: String, unique: true }
});

userSchema.pre('save', async function (next) {
    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const UserModel = model('User', userSchema);
module.exports = UserModel;

