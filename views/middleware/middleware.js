module.exports=Authenticator=(req,res,next)=>{
    if(req.isAuthenticated()){            // isAuthenticated is a passport method used for a middleware and if an req.isAutenticated has a any data returned then next function is called and the next function is 
        next()
    }else{
        res.redirect('/login')
    }
}



