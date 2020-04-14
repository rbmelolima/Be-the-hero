# Explicações feitas em aula

## MÉTODOS HTTP  
GET: Buscar informações.
POST: Criar informações.
PUT: Alterar informações.
DELETE: Deletar informações.
  

## TIPOS DE PARÂMETROS  
Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação).
Route Params: Parâmetros utilizados para identificar recursos.
Request Body: Corpo da requisição, usada para criar ou alterar recursos.
  


## DEPENDÊNCIAS  
Express: Criação de rotas.
Nodemon: Hot reload do servidor.
Knex.js: Query builder mais utilizado dentro do node.js.

### Knex.js
[Link](http://knexjs.org/#Schema)

1. npm install knex
2. npm install sqlite3
3. npx knex init

1. npx knex migrate:make create_ongs
2. npx knex migrate:latest

1. npx knex migrate:make create_incidents
2. npx knex migrate:latest

?. npx knex migrate:rollback -> Desfaz a última migration


## Database
Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()


## Entidades
- ONG
- Casos (incident)

## Funcionalidades
- Login de ONG
- Logout de ONG
- Cadastro de ONG
- Cadastrar novos casos
- Deletar novos casos
- Listar casos específicos de uma ONG
- Listar todos os casos
- Entrar em contato com a ONG

