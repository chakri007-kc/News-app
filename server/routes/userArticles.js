const router = require('express').Router();
const User = require('../models/user.model')
const {v4 : uuidv4} = require('uuid')

const verify = require('./verifyToken');

router.get('/articles',verify, async(req,res) => {
    const article = await User.findOne({email: req.user.email});
    // console.log(req.user)
    // console.log(article.articles);
    res.send(article.articles)
})

router.post('/articles/add',verify, async(req,res) => {
    var new_article = req.body;
    new_article._id = uuidv4();
    try{
        const user = await User.findOneAndUpdate(
            {email: req.user.email},
            {$push: {articles: new_article}}
        )
        res.json({status:'Added'})
    }
    catch(err){
        res.json({status:'error' , error:'invalid token'})
    }
})

router.delete('/articles/delete/:id',verify, async(req,res) => {
    var delete_article = {_id : req.params.id};
    // console.log(delete_article)
    try{
        const user = await User.findOneAndUpdate(
            {email: req.user.email},
            {$pull: {articles: delete_article}},
            {new: true},
        )
        res.json({status:'ok'})
    }
    catch(err){
        res.json({status:'error' , error:'invalid token'})
    }
})





module.exports = router;