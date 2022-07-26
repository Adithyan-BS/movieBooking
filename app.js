require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT;
const cookieParser=require('cookie-parser');
const userRouter=require('./routes/user');
const adminRouter=require('./routes/admin');
const venderRouter=require('./routes/vender');
const db=require('./database/connection')
const path =require('path');
const passport = require('passport');
require('./controles/passportAuthentication/passport')
const session=require('express-session')

db();



//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
//middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(passport.initialize())
//Authentication packages
app.use(session({
    secret: 'sessionStore',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }))

app.use(passport.initialize());
app.use(passport.session());
app.use((req,res,next)=>{
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(req.session);
    // console.log("+++++++++++++=================");
    console.log(req.user);
    next()
})
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