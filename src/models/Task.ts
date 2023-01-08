import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
        default : Date.now
    },
    taskType : {
        type : String,
        enum : ["Story" , "Bug" , "Spike"],
        required : true,
        default : "Story"
    },
    priority : {
        type : String,
        enum : ["High" , "Low" , "Medium"],
        required : true,
        default : "Low"
    },
    status : {
        type : String,
        enum : ["Ready" , "Pending" , "Completed"],
        required : true,
        default : "Ready"
    },
    storyPoints : {
        type : Number,
        default : 0
    },
    completed : {
        type : Number,
        default : 0
    },
    isBacklog : {
        type : Boolean,
        default : true
    },
    assignedTo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    },
    sprintId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Sprints"
    },
    comments : [
        {
            text : String,  
        },
        {
            createdAt : Date,
            
        },
        {
            updatedAt : Date,
            
        },
        {
            author : mongoose.Schema.Types.ObjectId,
            ref : "Users",
            required : true
        },
        {
            tags : [
                mongoose.Schema.Types.ObjectId
            ]
        }
    ]
});

export const Task = mongoose.model('Tasks' , taskSchema);
