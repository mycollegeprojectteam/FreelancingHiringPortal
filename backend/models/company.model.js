import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
        index:true
    },
    website:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        default:""
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});

export const Company = mongoose.model("Company", companySchema);