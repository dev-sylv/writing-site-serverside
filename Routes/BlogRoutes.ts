import { Router } from "express";

import {BlogUploads} from "../Config/multer";

import { AllBlogPost, SingleBlogPost, UpdateBlogPost, UploadBlogPost } from "../Controllers/BlogController";

const blogRoutes = Router();

blogRoutes.route("/all-blog-posts").get(AllBlogPost);
blogRoutes.route("/single-blog-posts/:blogID").get(SingleBlogPost);
blogRoutes.route("/post-new-blog-post/:adminID").post(BlogUploads, UploadBlogPost);
blogRoutes.route("/edit-blog-post/:blogID").patch(UpdateBlogPost);

export default blogRoutes