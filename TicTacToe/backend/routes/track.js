const router = require('express').Router();
const Score = require('../model/HighScores');

// Add new user to scores 
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

// Return the scores
router.get('/', async (req, res) => {
    try{
        const scores = await Score.find();
        res.send(scores);
    }
    catch(err){
        res.status(400).send(err);
    }
});

// Get the score of a specific name
router.get('/:name', async (req, res) => {
    try{
        const score = await Score.find({name: req.params.name});
        res.send(score);
    }
    catch(err){
        res.status(400).send(err);
    }
});

// Update the score of a name
router.patch('/:name', async (req, res) => {
    try{
        const score = await Score.findOneAndUpdate({name: req.params.name}, {$set: {score: req.body.score}}, {new: true});
        res.send(score);
    }   
    catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
