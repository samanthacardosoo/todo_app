const geraPaginaTodo = require('../views/template_todo_app');
const bancoDados = require('../configs/banco');
//const geraDados = require('../configs/create')

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

    app.get('/', (req, res) => {
      bancoDados.all('SELECT * FROM TAREFAS', (err, rows) => {
        if(rows.length > 0) {
          res.send(geraPaginaTodo(rows));
        } else {
          res.send(geraPaginaTodo());
        }
      });
    });

    app.get("/testenodemon", (req, res) => {
        res.send(`
            <h1>Rota de teste do nodemon</h1>
        `);
    });
}


