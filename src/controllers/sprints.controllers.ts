import { NextFunction, Request, Response } from "express";
import sprintService from '../services/sprints.services';

async function create(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(201).json(await sprintService.createSprint(req.body));
    }
    catch(err){
        next(err);
    }
}

async function update(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await sprintService.updateSprint(req.body , req.params));
    }
    catch(err){
        next(err);
    }
}

async function deleteSprint(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await sprintService.deleteSprint(req.params));
    }
    catch(err){
        next(err);
    }
}

async function get(req : Request , res : Response , next : NextFunction) {
    try{
        res.status(200).json(await sprintService.getSprint(req.params));
    }
    catch(err){
        next(err);
    }
}


export default {
    create,
    update,
    deleteSprint,
    get
}