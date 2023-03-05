"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBlogPost = exports.UpdateBlogPost = exports.BlogPostViews = exports.SingleBlogPost = exports.AllBlogPost = exports.SearchBlogPost = exports.UploadBlogPost = void 0;
const postModels_1 = __importDefault(require("../Models/postModels"));
const adminModels_1 = __importDefault(require("../Models/adminModels"));
const mongoose_1 = __importDefault(require("mongoose"));
// Upload a blog post:
const UploadBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield adminModels_1.default.findById(req.params.adminID);
        if ((admin === null || admin === void 0 ? void 0 : admin.isAdmin) === true) {
            const { blogname, blogcategory, blogimage, blogdescription, bloglinks, views } = req.body;
            // const cloudImg = await cloud.v2.uploader(req?.file?.path)
            const newBlogPost = yield postModels_1.default.create({
                PostedBy: admin === null || admin === void 0 ? void 0 : admin.name,
                blogname,
                blogcategory,
                blogdescription,
                blogimage,
                bloglinks,
                views
            });
            admin === null || admin === void 0 ? void 0 : admin.blogpost.push(new mongoose_1.default.Types.ObjectId(newBlogPost._id));
            admin === null || admin === void 0 ? void 0 : admin.save();
            return res.status(201).json({
                message: "Successfully created blog post",
                data: newBlogPost
            });
        }
        else {
            return res.status(400).json({
                message: "You're not authorized to upload blog post"
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in uploading blog post", error,
            data: error.message
        });
    }
});
exports.UploadBlogPost = UploadBlogPost;
// Search for a blog post:
const SearchBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchPost = yield postModels_1.default.findOne(req.query);
        return res.status(200).json({
            message: "Search blog post successfully gotten",
            data: searchPost
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in searching for blog post",
            data: error
        });
    }
});
exports.SearchBlogPost = SearchBlogPost;
// Get all blog posts:
const AllBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogposts = yield postModels_1.default.find();
        if (blogposts) {
            return res.status(200).json({
                message: "Successfully got all blog posts",
                data: blogposts
            });
        }
        else {
            return res.status(404).json({
                message: "There are no blog posts"
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "Couldn't get all blog posts",
            data: error
        });
    }
});
exports.AllBlogPost = AllBlogPost;
// Get a single post:
const SingleBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogpost = yield postModels_1.default.findById(req.params.blogID);
        if (blogpost) {
            return res.status(200).json({
                message: "Successfully got this blog post",
                data: blogpost
            });
        }
        else {
            return res.status(404).json({
                message: "Blog Posts doesn't exist"
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "Couldn't get this blog post",
            data: error
        });
    }
});
exports.SingleBlogPost = SingleBlogPost;
// views of each blog post:
const BlogPostViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogViews = yield postModels_1.default.findByIdAndUpdate(req.params.blogID, {
            $push: { views: req.body.ip }
        }, { new: true });
        return res.status(200).json({
            message: "Successfully got blog post views",
            data: blogViews
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting views of this blog post",
            data: error
        });
    }
});
exports.BlogPostViews = BlogPostViews;
// update a blog post:
const UpdateBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blogname, blogcategory, blogdescription, bloglinks, blogimage } = req.body;
        const updatedblogpost = yield postModels_1.default.findByIdAndUpdate(req.params.blogID, {
            blogname, blogcategory, blogdescription, bloglinks, blogimage
        }, { new: true });
        return res.status(200).json({
            message: "Successfully updated this blog post",
            data: updatedblogpost
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in updating this blog post",
            data: error
        });
    }
});
exports.UpdateBlogPost = UpdateBlogPost;
// Delete a blog post:
const DeleteBlogPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singlePost = yield postModels_1.default.findByIdAndRemove(req.params.blogID);
        return res.status(200).json({
            message: "Successfully updated this blog post",
            data: singlePost
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in updating this blog post",
            data: error
        });
    }
});
exports.DeleteBlogPost = DeleteBlogPost;
