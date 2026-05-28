import { registerUser } from "../services/authService.js";

export const register = async(req, res) => {
    const {email , firstname , lastname , mobile , password} = req.body;
    
    try {
        const result = await registerUser({email , firstname , lastname , mobile , password}); 
        res.status(201).json(result);    
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}