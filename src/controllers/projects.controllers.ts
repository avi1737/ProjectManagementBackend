import { NextFunction, Request, Response } from "express";
import projectService from '../services/projects.services';

async function create(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(201).json(await projectService.createProject(req.body));
    }
    catch(err){
        next(err);
    }
}

async function update(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await projectService.updateProject(req.body , req.params));
    }
    catch(err){
        next(err);
    }
}

async function deleteProject(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await projectService.deleteProject(req.params));
    }
    catch(err){
        next(err);
    }
}

async function get(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await projectService.getProject(req.params));
    }
    catch(err){
        next(err);
    }
}


export default {
    create,
    update,
    deleteProject,
    get
}