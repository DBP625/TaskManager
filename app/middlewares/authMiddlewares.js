import {DecodeToken} from "../config/token.js";


export default (req , res , next) => {
    let token = req.headers["authorization"];
    if(!token){
        return res.status(401).json({error: "No token provided"});
    }
    let decoded = DecodeToken(token);
    if(!decoded){
        return res.status(401).json({error: "Invalid token"});
    }
    else {
        let email = decoded.email;
        let userId = decoded.user_id; 
        req.headers.email = email ;
        req.headers.userId = userId ;
        next(); // this help to move on the next
    }
}