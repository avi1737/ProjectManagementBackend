import { Request , Response , NextFunction } from 'express';
import taskService from '../services/tasks.services';

async function create(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(201).json(await taskService.createTask(req.body));
    }
    catch(err){
        next(err);
    }
}

async function update(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await taskService.updateTask(req.body , req.params));
    }
    catch(err){
        next(err);
    }
}

async function deleteTask(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await taskService.deleteTask(req.params));
    }
    catch(err){
        next(err);
    }
}

async function get(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await taskService.getTask(req.params));
    }
    catch(err){
        next(err);
    }
}

async function getTaskFilterOnSprint(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await taskService.getTaskFilterOnSprint(req.params));
    }
    catch(err){
        next(err);
    }
}


export default {
    create,
    update,
    deleteTask,
    get,
    getTaskFilterOnSprint
}