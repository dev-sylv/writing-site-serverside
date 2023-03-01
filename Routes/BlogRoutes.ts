import { Router } from "express";
import { AllBlogPost, SingleBlogPost, UploadBlogPost } from "../Controllers/BlogController";

const blogRoutes = Router();

blogRoutes.route("/all-blog-posts").get(AllBlogPost);
blogRoutes.route("/single-blog-posts/:blogID").get(SingleBlogPost);
blogRoutes.route("/post-new-blog-post").post(UploadBlogPost);

export default blogRoutes