import multer from "multer"
import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/Resume_uploads"))
  },
  filename: function (req, file, cb) {
    const originalExtension = path.extname(file.originalname); // Get the original file extension
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}`; // Create a unique name
    cb(null, uniqueName + originalExtension);
  }
})

const upload = multer({ storage: storage })
export default upload;