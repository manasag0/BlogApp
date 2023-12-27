const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
const secret = 'asdfe356fghhvbkhgsr'

require('dotenv').config();
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(express.json())
app.use(cookieParser())

let uri = process.env.DATABASE_URL;
mongoose.connect(
    'mongodb+srv://manasa:manasa4nasa@cluster0.kirzzdu.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.send('welcome')
})



// Signup route
app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Check if the username or email already exists in the database
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        // Create a new user instance based on the User schema
        const newUser = new User({ username, password, email });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "Invalid Username or Password" });
        }

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Passwords match - create a JWT token
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Set 'token' as a cookie and send a JSON response
            res.cookie('token', token).json({ message: "Login successful" });
        } else {
            return res.status(400).json({ message: "Invalid Username or Password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/profile',(req,res)=>{
    const {token} = req.cookies
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err;
        res.json(info)
    })
res.json(req.cookies)
})

app.post('/logout',(req,res)=>{
    res.clearCookie("token").json('OK')
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`"Server is running on port ${port}"`);
})