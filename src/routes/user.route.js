import { Router } from "express";
import { signupHandler,signIn } from "../controllers/user.controller.js";

const router = Router();

router.post('/signup', signupHandler)
router.post('/signin', signIn)

export default router