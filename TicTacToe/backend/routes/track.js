const router = require('express').Router();
const Score = require('../model/HighScores');

router.post('/newUser', async (req, res) => {
    const score = new Score({
        name: req.body.name,
        score: 0
    });
    try{
        const savedScore = await score.save();
        res.send(savedScore);
    } catch(err){
        res.status(400).send(err);
    }
});

router.post('/getHighScore', async (req, res) => {
    try{
        const highScore = await HighScore.find().sort({score: -1}).limit(10);
        res.send(highScore);
    } catch(err){
        res.status(400).send(err);
    }
});

router.post('/addOneToUserScore', async (req, res) => {
    try{
        const user = await User.findOneAndUpdate({name: req.body.name}, {$inc: {score: 1}}, {new: true});
        res.send(user);
    } catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
