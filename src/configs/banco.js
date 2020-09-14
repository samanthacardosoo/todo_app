const sqlite = require("sqlite3").verbose();

const banco = new sqlite.Database("./database.db", sqlite.OPEN_READWRITE);

process.on("SIGINT", () =>
  banco.close(() => {
    console.log("Banco encerrado");
    process.exit(0);
  })
);

module.exports = banco;
