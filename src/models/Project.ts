import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name : {
        required : true,
        type : String
    },
    members : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        }
    ],
    sprints : [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Sprints"
    }
    ]
});

export const Project = mongoose.model('Projects', projectSchema);
