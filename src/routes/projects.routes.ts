import { Router } from "express";
import projectController from '../controllers/projects.controllers';

const router = Router();

router.post('/project/create', projectController.create);
router.put('/project/update/:id', projectController.update);
router.delete('/project/delete/:id',projectController.deleteProject);
router.get('/project/:id',projectController.get);

export default router;