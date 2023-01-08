import { Sprint } from "../models/Sprint"

async function createSprint(payload) {
    const newSprint = await Sprint.create(payload);
    return newSprint;
}

async function updateSprint(payload,params) {
    const sprint = await Sprint.updateOne({ _id : params.id} , payload);

    if(!sprint){
        return{
            message : "Sprint does not exits with id"
        }
    }
    
    return {
        data : sprint,
        message : "Sprint updated"
    }
}

async function deleteSprint(params) {
    const deleteSprint  = await Sprint.deleteOne({ _id : params.id});
    return {
        message : "Sprint Deleted"
    }
}

async function getSprint(params) {
    const sprint = await Sprint.findOne({ _id : params.id});
    return sprint;
}

export default {
    createSprint,
    updateSprint,
    deleteSprint,
    getSprint
}