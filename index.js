//connect to express to start building server
const express = require('express');
const app = express();
//connect to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Ebunoluwa:EbunAlabi20@react-blog.exzpc.mongodb.net/react-blog?retryWrites=true&w=majority',
{useNewUrlParser:true})
.then (()=> console.log('DB connected'))
.catch(err=>console.error(err))
//route handling
app.get('/', (req, res)=>{
    res.send('hello world')
})
//listen at port
app.listen(5000);