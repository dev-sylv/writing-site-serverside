import { Router } from "express";

import {BlogUploads} from "../Config/multer";

import { AllBlogPost, SingleBlogPost, UploadBlogPost } from "../Controllers/BlogController";

const blogRoutes = Router();

blogRoutes.route("/all-blog-posts").get(AllBlogPost);
blogRoutes.route("/single-blog-posts/:blogID").get(SingleBlogPost);
blogRoutes.route("/post-new-blog-post/:adminID").post(BlogUploads, UploadBlogPost);

export default blogRoutes