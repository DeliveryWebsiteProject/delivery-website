import { Request, Response } from "express";
import { Messages, User } from "../models";
import { OrderState } from '../models/Order';
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

  public static async sendMessage(req: Request, res: Response): Promise<Response> {
    const { state } = req.body

    let client: User = await new UserRepositoryTransaction().getById(req.params.id);

    if (!client) {
      return res.status(404).end();
    }

    const messages = (await new MessagesRepositoryTransaction().getMessages())[0];
    let message = ''

    switch (state) {
      case OrderState.PENDING:
        message = messages.welcome
        break

      case OrderState.IN_PROGRESS:
        message = messages.start
        break

      case OrderState.COMPLETED:
        message = messages.finish
        break

      default:
        break;
    }

    if (message) {
      new TwilioSender().sendMessage(message, client.phone);
    }

    return res.status(201).end();
  }
}