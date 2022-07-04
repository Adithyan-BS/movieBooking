const mongoose = require('mongoose');
const db=()=>{
mongoose.connect('mongodb://localhost:27017/movieDataBase',()=>{
    console.log('mongodb connected');
});

}

module.exports=db
