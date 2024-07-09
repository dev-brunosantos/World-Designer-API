import { Router } from "express";
import { CategoriasControllers } from "../controllers/CategoriasController";

export const CategoriasRoutes = Router()

CategoriasRoutes
    .get('/categorias', CategoriasControllers.VerCategorias)
    
    .post('/categorias/nova', CategoriasControllers.Criar)