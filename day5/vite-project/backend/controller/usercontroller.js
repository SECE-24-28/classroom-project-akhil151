import user from "../models/user.js";


export const createuser = async (req, res) => {
    try{
        const users = await user.create(req.body);
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getuser = async (req, res) => {
    try {
        const users = await user.find({});
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}


export const getuserbyid = async (req,res) =>{
    try{
        const users = await user.findById(req.params.id);
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

export const deleteuser = async(req,res) =>{
    try{
        const users = await user.findByIdAndDelete(req.params.id);
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message : error.message});
    
    }
}


export const registeruser = async(req,res)=>{
    try{
        const {email} = req.body;
        const userexist = await user.findOne({email});
        if(userexist){
            return res.status(400).json({message: "User already exists"});
        }
        const users = await user.create(req.body);
        res.status(201).json(users);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

export const loginuser = async(req,res) => {
    try{
        const {email,password} = req.body;
        const userexist = await user.findOne({email});
        if(!userexist){
            return res.status(400).json({message: "User not found"});
        }
        // Simple password comparison (add bcrypt for production)
        if(userexist.password !== password){
            return res.status(400).json({message: "Invalid password"});
        }
        res.status(200).json({message: "Login successful", user: userexist});
    }
   catch(error){
        res.status(500).json({message : error.message});
   }

}


