import { Request, Response } from "express";
import { Settings } from "../models";
import SettingsRepositoryTransaction from '../repositories/settings/SettingsRepositoryTransaction';

export default class SettingsController {
  public static async getSettings(req: Request, res: Response): Promise<Response<Settings>> {
    const settings = await new SettingsRepositoryTransaction().getSettings();

    return res.json(settings[0])
  }

  public static async create(req: Request, res: Response): Promise<Response<Settings>> {
    const settings = await new SettingsRepositoryTransaction().create(req.body);

    return res.json(settings)
  }

  public static async update(req: Request, res: Response): Promise<Response<Settings>> {
    const settings = await new SettingsRepositoryTransaction().update(req.body);

    return res.json(settings)
  }
}