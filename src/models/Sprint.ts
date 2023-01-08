import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sprintSchema = new Schema({
    name : {
        required : true,
        type : String
    },
    startDate : {
        required : true,
        type : Date
    },
    endDate : {
        required : true,
        type : Date
    },
    currentVelocity : {
        required : false,
        type : Number
    }
});

export const Sprint = mongoose.model('Sprints', sprintSchema);
