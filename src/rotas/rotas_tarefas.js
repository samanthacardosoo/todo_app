const geraPaginaTodo = require('../views/template_todo_app');

let tarefa = [{
	titulo: "Dentista",
	descricao: "Ir ao dentista amanhã"
},
{
    titulo: "nome da tarefa",
    descricao: "descricao"
}]

module.exports = (app) => {

app.get('/', (req, res) => {
    res.send(geraPaginaTodo(tarefa));
})

app.get("/testenodemon", (req, res) => {
    res.send(`
		<h1>Rota de teste do nodemon</h1>
	`);
});

}


