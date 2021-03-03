const express = require('express')
const app = express()
const fetch = require('node-fetch')

function obterCep(req, res){
    let url = 'https://economia.awesomeapi.com.br/json/USD-BRL'
    fetch(url)
    .then( (dado) => {
        return dado.json()
    })
    .then( (rows) => {
        let dolar = rows[0].high
        let real = req.params.id
        dolar = dolar * real
        res.json(dolar)
    })
}

app.get('/alunos/todos/', (req, res) => {
    let alunos = [
        {nome: "caique", instituição: "IFCE", curso: "Sistemas de Informação", campus: "Crato"},
        {nome: "robson", instituição: "IFCE", curso: "Sistemas de Informação", campus: "Crato"},
        {nome: "joana", instituição: "IFCE", curso: "Sistemas de Informação", campus: "Crato"},
        {nome: "aline", instituição: "IFCE", curso: "Sistemas de Informação", campus: "Crato"},
        {nome: "ueslhei", instituição: "IFCE", curso: "Sistemas de Informação", campus: "Crato"},
        {nome: "keniano", instituição: "IFCE", curso: "Sistemas de Informação", campus: "Crato"},
    ]
   
    res.json(alunos)

})

app.get('/moeda/:id', obterCep)

app.listen(3000)