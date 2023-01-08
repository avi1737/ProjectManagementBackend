import { Router } from "express";
import tasksController from "../controllers/tasks.controllers";

const router = Router();

router.post('/task/create/', tasksController.create);
router.put('/task/update/:id', tasksController.update);
router.delete('/task/delete/:id', tasksController.deleteTask);
router.get('/task/:id', tasksController.get);
router.get('/task/filterOnSprint/:sprintId', tasksController.getTaskFilterOnSprint);


export default router;