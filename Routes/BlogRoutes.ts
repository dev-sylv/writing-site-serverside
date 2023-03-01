import { Router } from "express";
import { AllBlogPost, SingleBlogPost } from "../Controllers/BlogController";

const blogRoutes = Router();

blogRoutes.route("/all-blog-posts").get(AllBlogPost);
blogRoutes.route("/single-blog-posts/:blogID").get(SingleBlogPost);

export default blogRoutes