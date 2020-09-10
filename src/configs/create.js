//executar apenas uma vez!!

const sqlite = require('sqlite3').verbose(); 
const bancoDados = require('../configs/banco') 

/* const USUARIO_SCHEMA =
`CREATE TABLE IF NOT EXISTS USUARIO
   (id INTEGER PRIMARY KEY AUTOINCREMENT
    nome TEXT,
    senha VARCHAR (32),
    email TEXT)`;  */

const TAREFAS_SCHEMA = 
    `CREATE TABLE IF NOT EXISTS TAREFAS 
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo VARCHAR(64),
        descricao TEXT,
        status VARCHAR(32))`;

/* const add_usuario = 
`INSERT INTO USUARIO 
   (nome,
    senha,
    email)
VALUES ('Samantha', 123456, 'sassacardosoo@gmail.com')
    ` */

const add_tarefas =
    `INSERT INTO TAREFAS
    (titulo,
        descricao,
        status)
    VALUES 
        ('Arrumar casa', 'Limpar toda semana', 'Do')
        `

/* dbDados.serialize(() => {
    dbDados.run(USUARIO_SCHEMA, (err) => {
        if(err) {
            console.log('Erro ao criar tabela usuario');
            process.exit(1);
        }
    });
    dbDados.run(add_usuario, (err) => {
        if(err) {
            console.log('Erro ao adicionar valores do usuario ao banco')
            process.exit(1);
        }
    })
}) */

bancoDados.serialize(() => {
    bancoDados.run(TAREFAS_SCHEMA, (err) => {
        if(err) {
            console.log('Erro ao criar tabela tarefas');
            process.exit(1);
        }
    });
    bancoDados.run(add_tarefas, (err) => {
        if(err) {
            console.log('Erro ao adicionar valores das tarefas ao banco', err)
            process.exit(1);
        }
    })
});

