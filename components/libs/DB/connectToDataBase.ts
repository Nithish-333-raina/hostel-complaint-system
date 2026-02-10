

import mongoose from "mongoose";

let isConnected = false;

const connectToDatabase = async()=>{
    if(isConnected){
        console.log("DB Already Connected")
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI!,{
            dbName:"complaintsDB"
        })
        isConnected = true;
        console.log("Connected Successfully");
    }catch(error){
        console.log("DB not Connected",error)
    }
}

export default connectToDatabase;