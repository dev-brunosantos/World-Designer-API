import { app } from "./app";
import { Mysql } from "./database/mysql";
import dotenv from 'dotenv';

dotenv.config()

const link = process.env.LINK;
const port = process.env.PORT || 4000;
const url = `${link}:${port}`

app.listen(port, () => {
    console.log(`Servidor rodando em: ${url}`)
    Mysql.authenticate().then(() => {
        console.log('Conexão com o Banco de Dados realizada com sucesso.')
        // Mysql.sync({force: true})
        Mysql.sync()
    }).catch((error: Error) => {
        console.log('Erro ao tentar conexão como Banco de Dados. \n', error)
    })
})