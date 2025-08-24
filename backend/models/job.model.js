import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        index:true
    },
    description:{
        type:String,
        required:true
    },

    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    location:{
        type:String,
        required:true,
        index:true 
    },
    salary:{
        type:Number,
        required:true
    },
    requirements:[{
        type:String
    }],
    jobType:{
        type:String,
        enum:["full-time","part-time"],
        required:true,
        index:true
    },
    position:{
        type:String,
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,ref:"Application"
    }]

},{timestamps:true});

export const Job = mongoose.model("Job", jobSchema);