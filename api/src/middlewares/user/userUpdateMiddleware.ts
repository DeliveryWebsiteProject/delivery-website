import { NextFunction, Request, Response } from "express";
import ApiError from "../../utils/ApiError";
import { User } from "../../models";
import { HttpStatus } from "../../utils/HttpStatus";
import UserRepositoryTransaction from "../../repositories/user/UserRepositoryTransaction";

export default async function userUpdateMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const value = req.body as any;

  const { id } = req.params

  if (value) {
    let { name, phone, address } = value as User;

    phone = phone.replace(/\W/g, '');

    if (!name || !phone) return next(new ApiError('Campos obrigatórios não preenchidos', HttpStatus.BAD_REQUEST))

    const user = await new UserRepositoryTransaction().getUserById(id);

    if (user) {
      if (name.length > 120) return next(new ApiError('Nome inválido', HttpStatus.BAD_REQUEST));

      if (phone.length !== 11) return next(new ApiError('Telefone inválido', HttpStatus.BAD_REQUEST));

      if ((address ?? '').length > 120) return next(new ApiError('Endereço inválido', HttpStatus.BAD_REQUEST));
    } else {
      return next(new ApiError('Usuário inexistente', HttpStatus.BAD_REQUEST));
    }

    next();
  } else {
    return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
  }

}