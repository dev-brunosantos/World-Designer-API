import { Request, Response } from "express";
import { CategoriasModel } from "../models/CategoriaModel";
import { MsgErro } from "./Alerta";

class Categorias {
    async Criar(req: Request, res: Response) {
        try {
            const { categoria } = req.body
            const criar = await CategoriasModel.create({ categoria })
            
            res.json({
                "mensagem": "Categoria criada com sucesso",
                "detalhes": criar
            })
        } catch (error) {
            const teste = await CategoriasModel.findAll()

            res.json({
                "mensagem": `Erro ao cadastrar nova categoria. ${MsgErro}`,
                "erro": error
            })
        }
    }

    async VerCategorias(req: Request, res: Response) {
        try {
            const categorias = await CategoriasModel.findAll()
            res.json(categorias)
        } catch (error) {
            res.json({
                "mensagem": `Erro ao buscar dados das categorias. ${MsgErro}`,
                "erro": error
            })
        }
    }
}

export const CategoriasControllers = new Categorias