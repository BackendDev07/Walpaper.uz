import { Router } from "express";
import adminController from "./admin.controller";

const router = Router()

router.put('/user/:id', adminController.createAdmin)

export default router