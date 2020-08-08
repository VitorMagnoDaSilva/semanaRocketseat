//Servidor
const express = require('express')
const server = express()

const  { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')


//Configurando nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})


server

//Receber dados do req.body, que está em pages.js

.use(express.urlencoded({extended: true}))

//Pegando todas os arquivos estáticos(CSS em si, imagens, etc)
.use(express.static("public"))

//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Iniciando servidor -- npm run dev faz ele ficar rodando o tempo inteiro
.listen(5500)
