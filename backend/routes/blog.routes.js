import express from "express";
import { upload } from "../middlewares/multer.js";
import { allblogs, createBlog, deleteBlog, userblogs } from "../controllers/blog.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/create", isAuthenticated, upload.single("image"), createBlog)
router.get("/all", allblogs)
router.delete("/delete/:id", isAuthenticated, deleteBlog)
router.get("/user/blogs", isAuthenticated, userblogs)

export default router;