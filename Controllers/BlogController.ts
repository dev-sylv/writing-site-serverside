import BlogModels from "../Models/postModels";
import cloudinary from "../Config/cloudinary"
import { Request, Response } from "express";
import { BlogData } from "../AllInterfaces/AllInterfaces";
import AdminModels from "../Models/adminModels";
import mongoose from "mongoose";

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
export const SingleBlogPost = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const blogpost = await BlogModels.findById(req.params.blogID);

        if (blogpost) {
            return res.status(200).json({
                message: "Successfully got this blog post",
                data: blogpost
            })
        } else {
            return res.status(404).json({
                message: "Blog Posts doesn't exist"
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't get this blog post",
            data: error
        })
    }
}


// Upload a blog post:
export const UploadBlogPost = async(req: Request, res: Response): Promise<Response> =>{
    try {
    
        const { blogname, blogcategory, blogimage, blogdescription, bloglinks, views } = req.body;
        
        // const cloudImg = await cloudinary.uploader.upload(req?.file?.path)
 
        const id = req.params.id
        const validId = new mongoose.Types.ObjectId(id.trim());
        const admin = await AdminModels.findById(validId)

        if (admin?.isAdmin === true) {
            const newBlogPost = await BlogModels.create({
                blogname,
                blogcategory,
                blogdescription,
                blogimage ,
                bloglinks,
                views
            })

           admin?.blogpost?.push(new mongoose.Types.ObjectId(newBlogPost?._id))
           admin?.save()

            return res.status(201).json({
                message: "Successfully created blog post",
                data: newBlogPost
            })

        } else {
            return res.status(400).json({
                message: "You're not authorized to upload blog post"
            })
        }
    
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in uploading blog post", error
        })
    }
}
// Search for a blog post:
export const SearchBlogPost = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const searchPost = await BlogModels.findOne(req.query);
        return res.status(200).json({
            message: "Search blog post successfully gotten",
            data: searchPost
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in searching for blog post",
            data: error
        })
    }
}

// views of each blog post:
export const BlogPostViews = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const blogViews = await BlogModels.findByIdAndUpdate(
            req.params.blogID,
            {
                $push: {views: req.body.ip}
            },
            {new: true}
        )
        return res.status(200).json({
            message: "Successfully got blog post views",
            data: blogViews
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting views of this blog post",
            data: error
        })
    }
}

// update a blog post:
export const UpdateBlogPost = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const { blogname, blogcategory, blogdescription, bloglinks, blogimage } = req.body;

        const updatedblogpost = await BlogModels.findByIdAndUpdate(
            req.params.blogID,
            {
                blogname, blogcategory, blogdescription, bloglinks, blogimage
            },
            {new: true}
        )
        return res.status(200).json({
            message: "Successfully updated this blog post",
            data: updatedblogpost
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in updating this blog post",
            data: error
        })
    }
}

// Delete a blog post:
export const DeleteBlogPost = async(req: Request, res: Response): Promise<Response> =>{
    try {

        const singlePost = await BlogModels.findByIdAndRemove(req.params.blogID)
        
        return res.status(200).json({
            message: "Successfully updated this blog post",
            data: singlePost
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in updating this blog post",
            data: error
        })
    }
}
