import multer from "multer";

type DestinationCallBack = (error: Error | null, destination: string) => void

type FileCallBack = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File
    ) => {
        cb(null, "Uploads")
    },

    filename: (
        req: Request,
        filename: FileCallBack,
        cb
    ) =>{
        cb(null, file.originalname)
    }
})