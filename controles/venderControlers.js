const venderModel=require('../models/venderModel')

exports.venderSignup=(req,res)=>{
    res.render('vender/venderSignup')
}
exports.venderLogin=(req,res)=>{
    res.render('vender/venderLogin')
}
exports.VendercreateAccount=(req,res)=>{
    res.redirect('venderSignup')
}
exports.venderSignupData=(req,res)=>{
    console.log(req.body);
    let venderSignupData=new venderModel({
        email:req.body.email,
        password:req.body.password
    })
    venderSignupData.save().then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
    res.redirect('venderLogin')

}
exports.venderLoginData=(req,res)=>{
    console.log(req.body);
}