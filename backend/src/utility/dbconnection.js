import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connection successful.");
    } catch (error) {
        console.error({message:error});
        process.exit(1); 
    }
}