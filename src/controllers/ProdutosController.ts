import { ProdutosModel } from "../models/ProdutosModel";
import { Request, Response } from "express";
import { MsgErro } from "./Alerta";
import { Mysql } from "../database/mysql";

import { FiltrarProdutoCategorias } from "../database/querys/produtos";

class Produtos {
    // CADASTRAR NOVOS PRODUTOS
    async Cadastrar(req: Request, res: Response) {
        try {
            const { produto, id_categoria, descricao, preco } = req.body
            const criar = await ProdutosModel.create({
                produto: produto,
                id_categoria: id_categoria,
                descricao: descricao,
                preco: preco
            })
            res.json({
                mensagem: "Produto cadastrado com sucesso.",
                detalhe: criar
            })
        } catch (error) {
            res.json({
                mensagem: `Erro ao tentar cadastrar o novo produto. ${MsgErro}`,
                erro: error
            })
        }
    }
    // VER A LISTA DE TODOS O PRODUTOS
    async VerProdutos(req: Request, res: Response) {
        try {
            const produtos = await ProdutosModel.findAll()
            res.json(produtos)
        } catch (error) {
            res.json({
                mensagem: `Erro ao buscar dados dos produtos. ${MsgErro}`,
                erro: error
            })
        }
    }
    // FILTRAR PRODUTOS POR CARTEGORIA
    async FiltrarCategoria(req: Request, res: Response) {
        try {
            const { categoria } = req.body;
            const query = `${FiltrarProdutoCategorias} '${categoria}'`
            const teste = await Mysql.query(query);
            res.json(teste[0]);
        } catch (error) {
            res.json({
                mensagem: `Erro ao buscar dados dos produtos.`,
                erro: error
            });
        }
    }
    
}

export const ProdutosControllers = new Produtos