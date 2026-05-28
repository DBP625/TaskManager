import jwt from "jsonwebtoken"
export const EncodeToken = (email , user_id) => {
    const KEY = "ABCKSUWFNDSKFJD12@#432@@@124!?$@#_3";
    const EXPIRE = {expiresIn: "24h"} ;
    const PAYLOAD = {
        "email": email ,
        "user_id": user_id
    }
    return jwt.sign(PAYLOAD , KEY , EXPIRE);

};

// Encryption Process
// Plain Text -> (Plain_Text + Public_KEY + Algorithm) -> Cipher Text

console.log(EncodeToken("pantho625@gmail.com" , 625));

export const DecryptToken = (token) => {
    const KEY = "ABCKSUWFNDSKFJD12@#432@@@124!?$@#_3";
    try {
        let result = jwt.verify(token , KEY);
        return result.email;
    } catch (error) {
        console.log(error);
        return null;
    }
}

