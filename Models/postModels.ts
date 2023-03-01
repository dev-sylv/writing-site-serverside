import { Document, model, Schema} from "mongoose";

import { BlogData } from "../AllInterfaces/AllInterfaces";

interface MainBlogData extends BlogData, Document{};

const BlogSchema = new Schema<BlogData>({
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
});

const BlogModels = model<MainBlogData>("Blogs", BlogSchema);

export default BlogModels;