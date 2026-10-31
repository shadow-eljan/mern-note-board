import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true
    },
    age:{
        type: Number,
        required: false
    },
},
{timestamps: true});

const Name = mongoose.model("NameDB", nameSchema);
export default Name;