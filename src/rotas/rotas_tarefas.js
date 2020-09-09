const geraPaginaTodo = require('../views/template_todo_app');

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
            if(req.params.nome == dbDados[i].nome) {            
                res.send(geraPaginaTodo(dbDados[i].tarefas))
            }
        }
    });

    app.get("/testenodemon", (req, res) => {
        res.send(`
            <h1>Rota de teste do nodemon</h1>
        `);
    });
}


