import { Document, model, Schema} from "mongoose";

import { BlogData } from "../AllInterfaces/AllInterfaces";

export interface MainBlogData extends BlogData, Document{};

const BlogSchema = new Schema({
    PostedBy: {
        type: String
    },
    blogname: {
        type: String
    },
    blogcategory: {
        type: String
    },
    blogdescription: {
        type: String
    },
    blogimage: {
        type: String
    },
    bloglinks: {
        type: String
    },
    views: []
}, {
    timestamps: true
});

const BlogModels = model<MainBlogData>("Blogs", BlogSchema);

export default BlogModels;