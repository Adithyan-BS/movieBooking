require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT;
const cookieParser=require('cookie-parser');
const userRouter=require('./routes/user');
const adminRouter=require('./routes/admin');
const venderRouter=require('./routes/vender');
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
//Routes
app.use('/',userRouter);
app.use('/admin',adminRouter);
app.use('/vender',venderRouter);
//Error Handling
app.use((error,req,res)=>{
    res.send(error);
})

app.listen(port,()=>{
    console.log('server running in portnumber 3000;');
})