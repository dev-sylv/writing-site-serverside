import BlogModels from "../Models/postModels";

import { Request, Response } from "express";

// Get all blog posts:
export const AllBlogPost = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const blogposts = await BlogModels.find();

        if (blogposts) {
            return res.status(200).json({
                message: "Successfully got all blog posts",
                data: blogposts
            })
        } else {
            return res.status(404).json({
                message: "There are no blog posts"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't get all blog posts",
            data: error
        })
    }
}

// Get a single post:

// Search for a blog post:

// Upload a blog post:

// views of each blog post:

// update a blog post:

// Delete a blog post: