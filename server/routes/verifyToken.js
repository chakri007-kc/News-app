const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const token = req.headers['auth-token'];
    if(!token) res.status(401).send( {status: 'error' , error: 'Access Denied'} );

    try{
        const verified = jwt.verify(token,process.env.TOKEN_SECRET)
        req.user = verified;
        next();
    }
    catch(err){
        res.status(400).send( {status: 'error' , error: 'INVALID TOKEN'} );
    }

}