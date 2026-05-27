import express from "express";
//import router from "./routes/api.js";
import dotenv from "dotenv";
dotenv.config();


//Security-Packages BEFORE MAIN ROUTING ENDPOINT
import ratelimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";



const app = express();

//Security Middlewares
app.use(helmet()); //Adds common security headers
app.use(hpp()); //Prevents HTTP Parameter Pollution attacks. Duplicate parameters
app.use(cors()); //limits the access to only the allowed origins

//Body Parsing 
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true, limit: "10mb"})); //Extended is set to true when we want to parse non-text data

//Rate Limiting
const limiter = ratelimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter);


//Web Cache
app.set("etag" , false);

//MongoDB Connection


//Routes
//app.use("/api" , router);


app.listen(3000 , () => {
    console.log("Server is running on port 3000");
});