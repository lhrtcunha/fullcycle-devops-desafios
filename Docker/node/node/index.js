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

const sql = `INSERT INTO people(name) values('Wesley')`
connection.query(sql)
connection.end()    

connection.query('SELECT name FROM people', (err,rows) => {
    if(err) throw err;
    rasp = '<h1>Full Cycle Rocks!</h1>' + rows.to;
});


app.get('/', (req,res) => {
    res.send(rasp)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})