const port = process.env.PORT;
const app = require('./app');

app.listen(port);
console.log(`Api rodando na porta ${port}`);
