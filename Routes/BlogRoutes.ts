import { Router } from "express";

import {BlogUploads} from "../Config/multer";

import { AllBlogPost, BlogPostViews, DeleteBlogPost, SearchBlogPost, SingleBlogPost, UpdateBlogPost, UploadBlogPost } from "../Controllers/BlogController";

const blogRoutes = Router();

blogRoutes.route("/all-blog-posts").get(AllBlogPost);
blogRoutes.route("/single-blog-post/:blogID").get(SingleBlogPost);
blogRoutes.route("/uploadpost/:adminID").post(BlogUploads, UploadBlogPost);
blogRoutes.route("/edit-blog-post/:blogID").patch(UpdateBlogPost);
blogRoutes.route("/delete-blog-post/:blogID").delete(DeleteBlogPost);
blogRoutes.route("/search-for-blog-post").get(SearchBlogPost);
blogRoutes.route("/views-for-blog-post/:blogID").patch(BlogPostViews);

export default blogRoutes