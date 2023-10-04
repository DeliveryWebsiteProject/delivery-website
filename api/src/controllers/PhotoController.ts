import { Request, Response } from 'express';
import PhotoRepositoryTransaction from "../repositories/photo/PhotoRepositoryTransaction";
import { HttpStatus } from "../utils/HttpStatus";

export default class PhotoController {
  public static async getById(req: Request, res: Response) {
    return res.json([]);
  }

  public static async add(req: Request, res: Response) {
    const path = req.file?.path;

    await new PhotoRepositoryTransaction().add(path ?? '');

    return res.status(HttpStatus.CREATED).end();
  }
}