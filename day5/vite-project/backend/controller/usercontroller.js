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