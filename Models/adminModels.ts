import mongoose, { Document, model, Schema} from "mongoose";

import { AdminData } from "../AllInterfaces/AllInterfaces";

export interface MainAdminData extends AdminData, mongoose.Document{};

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        alphanum: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    blogpost: [
        {
  type : mongoose.Schema.Types.ObjectId,
            ref: "Blogs"
        }
    ]
}, {
    timestamps: true,
});

const AdminModels = mongoose.model<MainAdminData>("users", AdminSchema);

export default AdminModels;