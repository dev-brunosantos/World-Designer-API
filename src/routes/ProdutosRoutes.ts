import { Router } from "express";
import { ProdutosControllers } from "../controllers/ProdutosController";

export const ProdutosRoutes = Router()

ProdutosRoutes
    .get('/produtos', ProdutosControllers.VerProdutos)
    .get('/produtos/categorias/:categoria', ProdutosControllers.FiltrarCategoria)
    
    .post('/produtos/cadastrar', ProdutosControllers.Cadastrar)
    .post('/produtos/categorias', ProdutosControllers.FiltrarCategoria)