const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validate');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Get a new user register
router.post('/register', async (req, res) => {
    
    //Validate that text entries match requirements
    const {error} = registerValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if name exits already in database
    const userExist = await User.findOne({name: req.body.name});
    if(userExist){
        return res.status(400).send('Name already taken');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Assign variable for new user and save
    const user = new User({
        name: req.body.name,
        password: hashedPassword
    });
    try{   
        const savedUser = await user.save();
        res.send("Login Succesful");
    } catch(err){
        res.status(400).send(err);
    }
});

//Login user and give them authentication key
router.post('/login', async (req, res) => {
    
    // Validate the entries match requirements
    const {error} = loginValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if name doesn't exist already in database
    const userExist = await User.findOne({name: req.body.name});
    if(!userExist) {
        return res.status(400).send('Invalid name, no user found'); 
    }
    // Check if password that is given is correct
    const validPass = await bcrypt.compare(req.body.password, userExist.password);
    if(!validPass){
        return res.status(400).send('Invalid password');
    }
    // Create jwt token and assign it to user header, send token as well
    const token = jwt.sign({_id: userExist._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});

module.exports = router;