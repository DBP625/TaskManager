//export const Mongoose_Connection = process.env.Mongoose_Url;

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const Mongoose_Connection = process.env.Mongoose_Url;
        await mongoose.connect(Mongoose_Connection);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Failed To Connect Mongo", error);
    }
}

export default connectDB;