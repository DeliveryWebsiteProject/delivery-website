import { NextFunction, Request, Response } from "express";
import { User } from "../models";
import ApiError from "../utils/ApiError";
import { HttpStatus } from "../utils/HttpStatus";
import UserRepositoryTransaction from "../repositories/user/UserRepositoryTransaction";

export default async function userValidationMiddlewares(
  req: Request, res: Response, next: NextFunction
) {
  const value = req.body as any;

  if (value) {
    let { name, cpf, password, phone } = value as User;

    cpf = cpf.replace(/\W/g, '');
    phone = phone.replace(/\W/g, '');

    if (!name || !cpf || !password || !phone) return next(new ApiError('Campos obrigatórios não preenchidos', HttpStatus.BAD_REQUEST))

    const user = await new UserRepositoryTransaction().getUserByCpf(cpf);

    if (!user) {
      if (password.length < 6) return next(new ApiError('A senha deve ter no mínimo 6 caracteres', HttpStatus.BAD_REQUEST));

      if (cpf.length !== 11 || cpf.match(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})^/)) return next(new ApiError('CPF inválido', HttpStatus.BAD_REQUEST));

      if (phone.length !== 11) return next(new ApiError('Telefone inválido', HttpStatus.BAD_REQUEST));
    } else {
      return next(new ApiError('CPF já cadastrado', HttpStatus.BAD_REQUEST));
    }

    next();
  } else {
    return next(new ApiError('Nenhum valor apresentado', HttpStatus.NOT_FOUND));
  }

}