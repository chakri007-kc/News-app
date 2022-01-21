const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/',async(req,res)=>{
    const users = await User.find();
    res.json(users);
})

router.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.json({status:'user already exists'});
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);
    const newUser = new User({
        name,
        email,
        password:hashPassword
    });
    await newUser.save();
    res.json({status : 'ok'})  
})

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){  
        return res.json({status:'user does not exist'});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({status:'password is incorrect'});
    }
    const token = jwt.sign({
        name:user.name,
        email:user.email
    },process.env.TOKEN_SECRET);
    res.header('auth-token',token).json({status:'ok' , token});
})




module.exports = router;
