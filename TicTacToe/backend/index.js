const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const route = require('./routes/auth');


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


app.use('/api/user', route);


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
