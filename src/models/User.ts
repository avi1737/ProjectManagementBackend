import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["PO","SCM","USER"],
        required : true,
        default : "USER"
    },
    refreshToken : { 
        type : String
    },
    projects : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Projects"
    },
});

export const User = mongoose.model('Users' , userSchema);
