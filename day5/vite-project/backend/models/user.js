import mongoose from 'mongoose';

const users = new mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    age : {type:Number, required:false},
});

export default mongoose.model("user", users);