const geraPaginaTodo = require('../views/template_todo_app');
const sqlite = require('sqlite3').verbose();

//banco de dados
const dadosDb = new sqlite.Database('../src/todo_bd');
  dadosDb.serialize(() => {
    dadosDb.run('INSERT INTO usuario (id_usuario, nome, senha, email) VALUES (01, "Samantha", 123456, "sassacardosoo@gmail.com")', (err) => {
      if(err) {
        console.log(err.message)
      }
    });

    dadosDb.run('INSERT INTO tarefas (id_tarefa, status, titulo, descricao) VALUES (01, "Do", "Arrumar casa", "Limpar casa toda semana")', (err) => {
      if(err) { 
        console.log(err.message)
      }
    });

    dadosDb.each(`SELECT * FROM usuario`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id_usuario + "\t" + row.nome + "\t" + row.senha + "\t" + row.email); 
    });
  });

  dadosDb.serialize(() => {
    dadosDb.each(`SELECT * FROM tarefas`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id_tarefa + "\t" + row.status + "\t" + row.titulo + "\t" + row.descricao);
    });
  });
  
  dadosDb.close((err) => {
    if (err) {
      console.error('Ocorreu um erro');
    }
    console.log('Fechando o banco de dados');
  });

  //termina banco de dados
const db = [{
    nome: "Lucio",
    tarefas: [{
        titulo: "Yoga",
        descricao: "Yoga segunda e quarta"
    }]},
    {nome: "Jussara",
    tarefas: [{
        titulo: "Musculação",
        descricao: "Malhar todo dia"
}]
}]


module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send(geraPaginaTodo([]))
    });

    app.get('/:nome', (req, res) => {
        for(let i=0; i<db.length; i++) {
            if(req.params.nome == db[i].nome) {
                res.send(geraPaginaTodo(db[i].tarefas))
            }
        }
    });

    app.get('/:nome', (req, res) => {
        for(let i=0; i<dadosDb.length; i++) {                   //banco de dados
            if(req.params.nome == dadosDb[i].nome) {            
                res.send(geraPaginaTodo(dadosDb[i].tarefas))
            }
        }
    });

    app.get("/testenodemon", (req, res) => {
        res.send(`
            <h1>Rota de teste do nodemon</h1>
        `);
    });
}


