import mongoose, { Document, model, Schema} from "mongoose";

import { AdminData } from "../AllInterfaces/AllInterfaces";

interface MainAdminData extends AdminData, Document{};

const AdminSchema = new Schema<AdminData>({
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blogs"
        }
    ]
}, {
    timestamps: true
});

const AdminModels = model<MainAdminData>("users", AdminSchema);

export default AdminModels;