module.exports=Authenticator=(req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }else{
        res.redirect('../user/userLogin')
    }
}

