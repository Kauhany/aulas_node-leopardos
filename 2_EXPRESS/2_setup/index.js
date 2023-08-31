// Importar o Express
const express = require('express')
const app = express()

// GET e POST = verbos http - receber = Get - enviar = POST 
app.get('/', (requisicao, resposta) => {
    resposta.send("Estou utilizando o Express!")
})