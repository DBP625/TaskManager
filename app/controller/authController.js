import { registerUser , loginUser } from "../services/authService.js";

export const register = async(req, res) => {
    const {email , firstname , lastname , mobile , password} = req.body;
    try {
        const result = await registerUser({email , firstname , lastname , mobile , password}); 
        res.status(201).json(result);    
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const login = async(req, res) => {
    const {email , password} = req.body ;
    try {
        const result = await loginUser({email,password});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}

export const getProfile = async(req,res) => {
    
}