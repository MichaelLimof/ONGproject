const express = require('express')
const routes = require('./routes')
const cors = require('cors')




const {errors} = require ('celebrate')

/*
GET : Buscar/listar uma informação do back-End
POST: Criar um usuario
PUT: alterar uma informação
DELETE: deletar um informação
*/

/*
Tipos de Parametros:
QUERY: Parametros nomeados enviados na rota após o simbolo '?'(filtros, paginacao) ex: app.get('/users?name=Michael'
ROUTE PARAMS: Parametros utilizados para identificar recursos  ex: /users/:id
REQUEST BODY: Corpoda Requisicao utilizado para criar ou alterar os recursos
*/
/*
Driver: SELECT * FROM users
Query Builders:  table('users').select('*').where()
Para Usar o query Builder sera instalado o KNEX e sqlite3
*/


const app = express();
app.use(cors())
app.use(express.json()) 
app.use(routes)
app.use(errors())

module.exports = app