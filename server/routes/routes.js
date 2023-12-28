import  express  from "express";

const router=express.Router()

import { signupUser,signinUser } from "../controllers/user-controller.js";

router.post('/signup',signupUser);
router.post('/signin',signinUser);



export default router;