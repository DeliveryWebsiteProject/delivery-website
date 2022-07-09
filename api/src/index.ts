import { Request, Response } from 'express'

require('dotenv')

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});