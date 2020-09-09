const geraPaginaTodo = require('./views/template_todo_app');
const sqlite = require('sqlite3').verbose();
const dbDados = new sqlite.Database('./db_todo.db'); 

dbDados.serialize(() => {
  dbDados.run('INSERT INTO usuario (id_usuario, nome, senha, email) VALUES (01, "Samantha", 123456, "sassacardosoo@gmail.com")', (err) => {
    if(err) {
      console.log(err.message)
    }
  });
    dbDados.each(`SELECT * FROM usuario`, (err, row) => {
        if (err) {
        console.error(err.message);
        }
        console.log(row.id_usuario + "\t" + row.nome + "\t" + row.senha + "\t" + row.email); 
    });
});

dbDados.serialize(() => {
    dbDados.run('INSERT INTO tarefas (id_tarefas, status, titulo, descricao) VALUES (01, "Do", "Arrumar casa", "Limpar casa toda semana")', (err) => {
          if(err) {
          console.log(err.message)
          }
      });
    dbDados.each(`SELECT * FROM tarefas`, (err, row) => {
          if (err) {
            console.error(err.message);
          }
          console.log(row.id_tarefas + "\t" + row.status + "\t" + row.titulo + "\t" + row.descricao);
        });
  });

dbDados.close((err) => {
    if (err) {
      console.error('Ocorreu um erro');
    }
    console.log('Fechando o banco de dados');
  });

module.exports = (app) => {
    app.get('/:nome', (req, res) => {
        for(let i=0; i<dadosDb.length; i++) {                   //banco de dados
            if(req.params.nome == dbDados[i].nome) {            
                res.send(geraPaginaTodo(dbDados[i].tarefas))
            }
        }
    });

}