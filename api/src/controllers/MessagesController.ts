import { Request, Response } from "express";
import { Messages, User } from "../models";
import MessagesRepositoryTransaction from '../repositories/messages/MessagesRepositoryTransaction';
import UserRepositoryTransaction from "../repositories/user/UserRepositoryTransaction";
import TwilioSender from "../utils/TwilioSender";

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

  public static async sendWelcomeMessage(req: Request, res: Response): Promise<Response> {
    let client: User = await new UserRepositoryTransaction().getById(req.params.id);

    if (!client) {
      return res.status(404).end();
    }

    let welcomeMessage = (await new MessagesRepositoryTransaction().getMessages())[0].welcome;

    new TwilioSender().sendMessage(welcomeMessage, client.phone);

    return res.status(201).end();
  }
}