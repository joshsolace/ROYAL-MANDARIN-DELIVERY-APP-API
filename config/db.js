const mongoose = require("mongoose");

let dbUrl = process.env.MONGO_URI_DEV

mongoose.set('strictQuery', false);
const connectDB = async()=>{
    try {
        await mongoose.connect(dbUrl)
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB

