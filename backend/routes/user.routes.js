import express from "express";
import { upload } from "../middlewares/multer.js";
// import { register } from "module";
import { login, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register" , upload.single("image"), registerUser)
router.post("/login" , login)
export default router;