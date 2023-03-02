import { Document, model, Schema} from "mongoose";

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
        default: "adimikeaugustine@gmail.com"
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
    }
}, {
    timestamps: true
});

const AdminModels = model<MainAdminData>("Admin", AdminSchema);

export default AdminModels;