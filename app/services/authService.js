import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import {EncodeToken} from "../config/token.js"

export async function registerUser({email , firstname , lastname , mobile , password}){

        const normalizedEmail = email.toLowerCase().trim();
        const normalizedMobile = mobile.trim();
        const existingUser = await users.findOne({
            $or : [
                {email: normalizedEmail},
                {mobile: normalizedMobile}
            ]
        });

        if(existingUser){
            throw new Error("User already exists");
        }

        try {
            passwordHash = await bcrypt.hash(password,10)
            await User.create({
                email:normalizedEmail,
                firstname,
                lastname,
                mobile:normalizedMobile,
                password: passwordHash
            });
            return {
                _id : user._id,
                message:"Registration Successfull",
                status: 201,              
            }
        } catch (error) {
            throw new Error("Error registering user: " , error.message)
        }

}

export async function loginUser({email, password}){
    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({email: normalizedEmail});
    if(!user){
        throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        throw new Error("Invalid Password");
    }

    const token = EncodeToken(user.email , user._id)
    return {token} ;

}