import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError"

export default function erroMiddlewares(error: Error, request: Request, response: Response, next: NextFunction) {
  if (error instanceof ApiError) {
    const { status, message } = error;

    return response.status(status).json({
      error: message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
}