const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri , ()=>{
    console.log('MongoDB connection established successfully');
})

const users = require('./routes/user');
app.use('/', users);

const userArticle = require('./routes/userArticles');
app.use('/', userArticle);

app.listen(PORT , ()=>{
     console.log(`server started on `, PORT)
})