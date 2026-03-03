import User from '../models/user.model.js';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerUser = async (req , res)=>{
    try{
        let image_filename = `${req.file.filename}`

        const {name , email , password} = req.body;

        // check if user already exists
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:"User already exists" , success:false})
        }
        // hash the password
        const hashedPassword = await bcrypt.hash(password , 10);

        // create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword    ,
            image: image_filename 
        })
        res.status(201).json({message:"User registered successfully" , success:true , user})
    }catch(error){
        res.status(500).json({message:"Internal server error"})
    }
}
export const login = async (req , res)=>{
    try{
        const {email , password} = req.body;

        // check if user exists
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User not found" , success:false}) 
        }

        // compare password
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password" , success:false})
        }
        // generate token
        const token = jwt.sign({id:user._id} , process.env.JWT_SECRET_KEY , {expiresIn:"1d"})
        res.status(200).json({message:"Login successful" , success:true , token , user})

    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
}