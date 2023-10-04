import { RequestHandler, Router } from "express";
import PhotoController from "../controllers/PhotoController";
import crypto from 'crypto';
import multer from "multer";
import fs from 'fs'

const photoRoutes = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = process.env.PHOTO_DIRECTORY;

    if (path) {
      //Verifica se não existe o diretório
      if (!fs.existsSync(path)) {
        //Efetua a criação do diretório caso ele não exista
        fs.mkdirSync(path, { recursive: true });
      }
      //Define o caminho da pasta
      cb(null, path ?? '');
    }
  }, filename: (req, file, cb) => {

    const randomSerial = crypto.randomUUID();

    cb(null, `${randomSerial}-${file.originalname}`)
  }
});

const uploader = multer({ storage: storage });

photoRoutes.get('/photos/:id', PhotoController.getById);
photoRoutes.post('/photos', uploader.single('photo') as RequestHandler, PhotoController.add);

export default photoRoutes;