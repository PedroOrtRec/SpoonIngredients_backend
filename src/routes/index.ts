import { Router } from "express";
import { welcomeMessage } from "../controllers";

const router: Router = Router();

router.get("/", welcomeMessage);

export default router