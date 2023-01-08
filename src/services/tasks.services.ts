import { Task } from "../models/Task"

async function createTask(payload) {
    const newTask = await Task.create(payload);
    return newTask;
}

async function updateTask(payload,params) {
    const task = await Task.updateOne({ _id : params.id} , payload);

    if(!task){
        return{
            message : "Task does not exits with id"
        }
    }
    
    return {
        message : "Task updated"
    }
}

async function deleteTask(params) {
    const deleteTask  = await Task.deleteOne({ _id : params.id});
    return {
        message : "Task Deleted"
    }
}

async function getTask(params) {
    const task = await Task.findOne({ _id : params.id});
    return task;
}

async function getTaskFilterOnSprint(params) {
    const taskList = await Task.find({ sprintId : params.sprintId});
    return taskList;
}

export default {
    createTask,
    updateTask,
    deleteTask,
    getTask,
    getTaskFilterOnSprint
}