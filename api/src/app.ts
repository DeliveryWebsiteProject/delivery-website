import express, { Request, Response } from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import dotenv from 'dotenv'

import routes from './routes'

class App {
  public express: express.Application

  constructor() {
    dotenv.config()

    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database(): void {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://127.0.0.1:27017/api').then(() => {
      console.log('Connected');
    })
  }

  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express