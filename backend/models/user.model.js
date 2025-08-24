import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true, 
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["recruiter","freelancer"],
        required:true
    },
    profile:{
        bio:{type:String},
        skills:[{type:String}],
        location:{
            city:{type:String},
            country:{type:String}
        },
        resume:{type:String},
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:"Company"},
        profilePhoto:{type:String, default:""},

    }
},{timestamps:true});
export const User = mongoose.model("User", userSchema);
