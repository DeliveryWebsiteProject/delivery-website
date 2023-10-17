import { Request, Response } from 'express';
import PhotoRepositoryTransaction from "../repositories/photo/PhotoRepositoryTransaction";
import { HttpStatus } from "../utils/HttpStatus";

export default class PhotoController {
  public static async getById(req: Request, res: Response) {
    const { id } = req.params;

    const photo = await new PhotoRepositoryTransaction().getPhotoById(id);

    const dirname = __dirname.substring(0, __dirname.indexOf('api'));

    return res.sendFile(photo?.path ?? `${dirname}/api/assets/default.png`);
  }

  public static async add(req: Request, res: Response) {
    const path = req.file?.path;

    const photo = await new PhotoRepositoryTransaction().add(path ?? '');

    return res.status(HttpStatus.OK).json(photo);
  }
}