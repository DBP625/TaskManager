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

// console.log(DecryptToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbnRobzYyNUBnbWFpbC5jb20iLCJ1c2VyX2lkIjo2MjUsImlhdCI6MTc3OTg4Njc5MCwiZXhwIjoxNzc5OTczMTkwfQ.khlMnA8ZLKXGy9VYyZ6PaapRa4UJe4kMt7ITRWVnTXY"));