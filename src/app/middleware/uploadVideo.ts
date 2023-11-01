
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'public', 'videos'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname.replace(/\s/g, ''))
    }
})

const videoUploader = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        console.log("file", req)
        // accept only xls files
        if (!file.originalname.match(/\.(mp4|MP4|avi|AVI|flv|FLV|wmv|WMV|mov|MOV|mpg|MPG|mpeg|MPEG|webm|WEBM|mkv|MKV)$/)) {
            return cb(new Error('Only video files are allowed!'))
        }
        cb(null, true)
    },
    limits: {
        fileSize: 1024 * 1024 * 1024 * 2 // 2 GB
    },
    // name: 'file'
})

export const videoUpload = videoUploader.single('file')
