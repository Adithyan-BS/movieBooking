
exports.hello=(req,res,next)=>{
    try {
        res.send("hello world");
    } catch (error) {
        next(error)
    }
    
}