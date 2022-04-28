const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeAuth = require('./routes/auth');
const routeTrack = require('./routes/track');


dotenv.config();

mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },function(error){
        if(error){
            console.error('Unable to connect to MongoDB: ', error);
        } else{ 
            console.log('Connected to MongoDB');
        }
    }
);

app.use(express.json());

app.use('/api/user', routeAuth).use('/api/highscore', routeTrack);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
