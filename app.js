require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT;
const cookieParser=require('cookie-parser');
const userRouter=require('./routes/user');
const adminRouter=require('./routes/admin');
const venderRouter=require('./routes/vender');
const db=require('./database/connection')
const path =require('path')

db();


//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
// app.engine('ejs',ejs({extname:'ejs',defaultLayout:'layout',layoutDir:__dirname+'/views/layout/partials',partialsDir:__dirname+'/views/layout/'}))
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
//Routes
app.use('/',userRouter);
app.use('/admin',adminRouter);
app.use('/vender',venderRouter);
//Error Handling
app.use((error,req,res,next)=>{
    
    res.render('error',{errorMessge:error});
   
})


app.listen(port,()=>{
    console.log('server running.....');
})