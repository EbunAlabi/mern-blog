//connect to express to start building server
const express = require('express');
const app = express();
//connect to mongoose
const mongoose = require('mongoose');
//add bodyparser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');

const {User} = require('./models/user');


mongoose.connect(config.mongoURI,
{useNewUrlParser:true})
.then (()=> console.log('DB connected'))
.catch(err=>console.error(err))

 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

//route handling
app.post('/api/users/register', (req,res) => {
    const user = new User(req.body) 
    //get data from user and send to mongo
    user.save((err, userData)=>{
        if (err) return res.json({success:false, err})
    })
    return res.status(200).json({success:true});

});
//listen at port
app.listen(5000);