import express from "express";

const router = express.Router();


import * as authController from "../app/controller/authController.js";


router.post("/register" , authController.register );
router.post("/login" , authController.login );

export default router;