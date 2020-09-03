const express = require('express');
const rotasTarefas = require('./rotas/rotas_tarefas');

const app = express()
const port = 3000

rotasTarefas(app);

app.listen(port, () => {
  console.log(`Servidor inicializado`)
})

module.exports = app; 
