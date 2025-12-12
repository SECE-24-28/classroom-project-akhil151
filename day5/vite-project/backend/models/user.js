import mongoose from 'mongoose';

const users = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    age : {type:Number, required:false},
    password : {type:String, required:true,minlength : 6},
},
{timestamps:true});

export default mongoose.model("user", users);