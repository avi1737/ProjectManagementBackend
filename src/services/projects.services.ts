import { Project } from "../models/Project";

async function createProject(payload){
    const newProject = await Project.create(payload);
    return newProject;
}

async function updateProject(payload,params){
    const updateProject = await Project.updateOne({ _id : params.id } , payload);
    return {
        message : "Project Updated"
    }
}

async function getProject(payload){
    const project = await Project.findOne({_id : payload.id});
    if(!project){
        return {
            message : "project not found",
            status : 401
        }
    }
    return project;
}

async function deleteProject(payload){
    const deleteProject = await Project.deleteOne({ _id : payload.id});
    return {
        message : "Project Deleted"
    }
}

export default {
    createProject,
    updateProject,
    deleteProject,
    getProject
}