import { Router } from "express";
import sprintsController from "../controllers/sprints.controllers";

const router = Router();

router.post('/sprint/create', sprintsController.create);
router.put('/sprint/update/:id', sprintsController.update);
router.delete('/sprint/delete/:id', sprintsController.deleteSprint);
router.get('/sprint/:id', sprintsController.get);

export default router;