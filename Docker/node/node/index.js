const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`INSERT INTO people(name) values('Luís Henrique')`, err => {
    if(err){
        console.log("[Erro ao incluir no BD",err);
        return;
    }
});

var resp = '<h1>Full Cycle Rocks!</h1>';
connection.query(`SELECT * FROM people`, (err,result) => {
    result.forEach(row => {
        resp += `<h4>Nome: ${row.name} id: ${row.id}`
    });    
}).on('error', err => {
    console.log("[Erro ao obter registros do DB",err);
});

connection.end()

app.get('/', (req,res) => {
    res.send(resp)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})