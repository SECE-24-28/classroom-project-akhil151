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
        const users = await user.deleteuser(user.params.id);
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message : error.message});
    
    }
}


export const registeruser = async(req,res)=>{
    try{
        const users = await user.create(req.body);
        res.status(200).json(users);
        const userexist = await user.findOne({email});
        if(userexist){
            res.status(400);
            throw new Error("User not found");
    }}
    catch(error){
        res.status(500).json({message : error.message});
    }
}

export const loginuser = async(req,res) => {
    try{
         const {email,password} = req.body;
        const userexist = await user.findOne({email});
        if(!userexist){
            res.status(400);
            throw new Error("User not found");
        }
        const inmatch = await userexist.comparepassword(password);
        if(!ismatch){
            res.status(400);
            throw new Error("Invalid password");
        }
    }
   catch(error){
        res.status(500).json({message : error.message});
   }

}


