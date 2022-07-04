const movieModel=require('../models/models')
exports.hello=(req,res,next)=>{
    try {
        // const user=new movieModel({name:"Adithan",age:22})
        // user.save().then(()=>{
        //     console.log("data inserted to mongodb");
        //     console.log(user);
        //     console.log(req.app);

        // });
        res.render('user')
        
        
    } catch (error) {
        next(error)
    }
    
}