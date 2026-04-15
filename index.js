// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const mongoose = require("mongoose")
// const bcrypt = require("bcrypt");
// const cors = require("cors")
// app.set("view engine", "ejs")
// dotenv.config()

// const port = process.env.PORT
// const URI = process.env.MONGO_URI
// const users = []
// app.use(express.json())
// app.set('view engine', 'ejs');
// app.use(cors())
// app.use(express.urlencoded({ extended: true }))
// mongoose.connect(URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.log('Error connecting to MongoDB', err);
//   });
//   let customerSchema = mongoose.Schema({
//       firstName: {type: String, required: true},
//       lastName: {type: String, required: true},
//       email: {type: String,  required: true, unique: [true,"Email already exists"]},
//         password: {type: String, required: true}
//   });
//   const Customer = mongoose.model("user", customerSchema)



// app.get('/dashboard', ((req,res)=>{
//     res.send(student)
// }))
// app.get('/home', (req, res) => {
//     res.send('Welcome to the home page')
// })
// app.get('/about', (req, res) => {
//     res.send("We are still working on this page")
// })
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })
// app.get('/seen', ((req, res) => {
//     res.render('index', { name: Name })
// }))
// app.get('/signin', (req, res) => {
//     res.render('signin')
// })
// app.get('/signup', (req,res) => {
//     res.render('signup')
    
// })
// app.post('/register',((req, res) => {
//     // console.log(req.body)
//     const user = req.body
//     const newCustomer = new Customer(user);
//     newCustomer.save()
//     .then((user) => {
// console.log('Customer saved:', user);
// res.send("You have registered successfully");
//     })
//     .catch((err) => {
//         console.error('Error saving to DB:', err);
//         res.status(500).send("Error:" + err.message);
//     });
// }))

// app.listen(port, () => {
//     console.log(`I am on running on port ${port}`);
    
// })

const express = require('express')
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require("./routes/user.route");
dotenv.config();
const port = process.env.PORT||2008
const URI = process.env.MONGO_URI; // make this match the .env file
app.use(cors());
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


mongoose.connect(URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});




app.use("/user", userRoute);






app.listen(port, ()=> {
    console.log(`I am runnng on port ${port}`)
    
})