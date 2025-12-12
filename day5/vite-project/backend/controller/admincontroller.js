import admin from "../models/admin.js";


export const createadmin = async (req, res) => {
    try{
        const admins = await admin.create(req.body);
        res.status(200).json(admins);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getadmin = async (req, res) => {
    try {
        const admins = await admin.find({});
        res.status(200).json(admins);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}


export const getadminbyid = async (req,res) =>{
    try{
        const admins = await admin.findById(req.params.id);
        res.status(200).json(admins);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

export const deleteadmin = async(req,res) =>{
    try{
        const admins = await admin.findByIdAndDelete(req.params.id);
        res.status(200).json(admins);
    }
    catch(error){
        res.status(500).json({message : error.message});
    
    }
}


export const registeradmin = async(req,res)=>{
    try{
        const {email} = req.body;
        const adminexist = await admin.findOne({email});
        if(adminexist){
            return res.status(400).json({message: "Admin already exists"});
        }
        const admins = await admin.create(req.body);
        res.status(201).json(admins);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

export const loginadmin = async(req,res) => {
    try{
        const {email,password} = req.body;
        const adminexist = await admin.findOne({email});
        if(!adminexist){
            return res.status(400).json({message: "Admin not found"});
        }
        // Simple password comparison (add bcrypt for production)
        if(adminexist.password !== password){
            return res.status(400).json({message: "Invalid password"});
        }
        res.status(200).json({message: "Login successful", admin: adminexist});
    }
   catch(error){
        res.status(500).json({message : error.message});
   }

}


