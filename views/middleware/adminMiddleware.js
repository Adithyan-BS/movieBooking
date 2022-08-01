module.exports=adminAuthenticator=(req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }else{
        res.redirect('adminLogin')
    }
}