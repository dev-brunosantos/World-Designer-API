import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { Rotas } from './routes'

export const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(Rotas)