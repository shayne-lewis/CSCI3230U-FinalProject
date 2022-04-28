const jwt = require('jsonwebtoken');


function verifyToken(req, res, next) {
    
    // Assign token and make sure it is a token
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send('Access denied');
    }

    // Verify with jwt that the token matches, otherwise error
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch(err) {
        res.status(400).send('Invalid token');
    }
}