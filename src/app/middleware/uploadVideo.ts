
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "frontSideOfId" || file.fieldname === "backSideOfId" || file.fieldname === "selfieWithId" || file.fieldname === "depositSlip") {
            cb(null, path.join(process.cwd(), 'public', 'image'))
        }
        else if (file.fieldname === "videoAuthorization") {
            cb(null, path.join(process.cwd(), 'public', 'video'))
        }
        else {
            cb(null, path.join(process.cwd(), 'public', 'video'))
        }
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname.replace(",", "-").replace(/\s/g, ''))
    }
})

const videoUploader = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(mp4|MP4|avi|AVI|flv|FLV|wmv|WMV|mov|MOV|mpg|MPG|mpeg|MPEG|webm|WEBM|mkv|MKV|jpg|JPG|png|PNG|jpeg|JPEG)$/)) {
            return cb(new Error('Only video and image files are allowed!'))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 500, // 500 MB
        fieldSize: 1024 * 1024 * 500, // 500 MB
    },
    // name: 'file'
})

export const videoUpload = videoUploader.fields([
    { name: 'videoAuthorization', maxCount: 1 },
    { name: 'frontSideOfId', maxCount: 1 },
    { name: 'backSideOfId', maxCount: 1 },
    { name: 'selfieWithId', maxCount: 1 },
    { name: 'depositSlip', maxCount: 1 },
])
