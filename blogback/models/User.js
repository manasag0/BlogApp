
const mongoose = require('mongoose')
const {Schema,model} = mongoose;

const userSchama = new Schema({
username: {type: String, required: true, min: 4, unique:true},
password: {type: String,required: true, min:8 },
email:{ type: String, email: true ,unique : true }
})

const UserModel = model('User',userSchama);
// Getters and Setters
UserModel.exports = UserModel;