import express from 'express';
import uploadMiddleware from '../Middleware/uploadMiddleware.js';
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogController.js';
import upload from '../Middleware/uploadMiddleware.js';

const router = express.Router();

router.post("/", upload.single("image"), createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

export default router;