import multer from 'multer';

const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const limits: multer.Options['limits'] = {
    fileSize: 1024 * 1024 * 10, // 10 MB,
}

const fileFilter: multer.Options['fileFilter'] = (req, file, cb) => {
    // only zip files
    if (file.mimetype === 'application/zip' || file.mimetype === 'application/x-zip-compressed') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Zip files only.'));
    }
}

const upload = multer({
    storage,
    limits,
    fileFilter,
});

export default upload;