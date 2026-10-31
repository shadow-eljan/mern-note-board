import mongoose from 'mongoose';

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection successful");
    }catch(error){
        console.log("DB connection failed.");
    }
    
}

export default connect;