export interface BlogData {
    PostedBy: string
    blogname: string;
    blogimage: string;
    blogcategory: string;
    blogdescription: string;
    bloglinks: string;
    views: [];
}

export interface AdminData {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    blogpost: {}[];
}

export interface CustomRequest extends Request {
    file?: any;
    params: any;
    body: any;
}