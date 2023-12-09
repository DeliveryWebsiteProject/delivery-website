import { Request, Response } from "express";
import { Messages } from "../models";
import MessagesRepositoryTransaction from '../repositories/messages/MessagesRepositoryTransaction';

export default class MessagesController {
  public static async getMessages(req: Request, res: Response): Promise<Response<Messages>> {
    const settings = await new MessagesRepositoryTransaction().getMessages();

    return res.json(settings[0])
  }

  public static async create(req: Request, res: Response): Promise<Response<Messages>> {
    const settings = await new MessagesRepositoryTransaction().create(req.body);

    return res.json(settings)
  }

  public static async update(req: Request, res: Response): Promise<Response<Messages>> {
    const settings = await new MessagesRepositoryTransaction().update(req.body);

    return res.json(settings)
  }
}