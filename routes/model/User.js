const { default: mongoose } = require("mongoose");

const UserSchema= mongoose.Schema({
name:{
    type:String,
    required:true,
    min:6,
    max:255,
},
email:{
    type:String,
    require:true,
    max:255,
    min:6,
},
password:{
    type:String,
    required:true,
    min:8,
    max:16,
},
date:{
    type:Date,
    default:Date.now,

}
});


module.exports=mongoose.model('User',UserSchema);