const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');

dotenv.config();

// middleware
app.use(express.json());

// connect mongoose
const URI = 'mongodb+srv://api:mugisha11@cluster0.zdanp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(
    URI,{ useUnifiedTopology:true}
).then(()=>{
    console.log('db connected')
}).catch(e =>{
    console.log(e.message)
})
// import route

const authroute=require('./routes/auth');
// route middle ware

app.use('/api/user',authroute)



app.listen(3000,()=>console.log('server up and running'));
