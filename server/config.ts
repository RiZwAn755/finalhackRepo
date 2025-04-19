import mongoose from 'mongoose'
const {jwt} = require("jsonwebtoken");
mongoose.connect("mongodb+srv://admin:lucifer12@cluster0.7ao0pks.mongodb.net/mydata")
export  const jwt_secret = "mypassword"; 