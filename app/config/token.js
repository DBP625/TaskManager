import jwt from "jsonwebtoken"
export const EncodeToken = (email , user_id) => {
    const KEY = process.env.KEY;
    const EXPIRE = {expiresIn: "24h"} ;
    const PAYLOAD = {
        "email": email ,
        "user_id": user_id
    }
    return jwt.sign(PAYLOAD , KEY , EXPIRE);

};

// Encryption Process
// Plain Text -> (Plain_Text + Public_KEY + Algorithm) -> Cipher Text

//console.log(EncodeToken("pantho625@gmail.com" , 625));

// export const DecryptToken = (token) => {
//     const KEY = "ABCKSUWFNDSKFJD12@#432@@@124!?$@#_3";
//     try {
//         let result = jwt.verify(token , KEY);
//         return result.email;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

export const DecodeToken = (token) => {
    try {
        const KEY = process.env.KEY;
        let result = jwt.verify(token , KEY);
        return result;   // <-- ইমেইল ও আইডি সহ পুরো অবজেক্ট রিটার্ন হবে
    } catch (error) {
        console.log(error);
        return null;
    }
}
