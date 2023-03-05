"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const BlogSchema = new mongoose_1.Schema({
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
const BlogModels = (0, mongoose_1.model)("Blogs", BlogSchema);
exports.default = BlogModels;
