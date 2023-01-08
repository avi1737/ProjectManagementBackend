import { Router } from "express";
import usersControllers from "../controllers/users.controllers";

const router = Router();

router.post('/login', usersControllers.login);
router.post('/register', usersControllers.register);

export default router;