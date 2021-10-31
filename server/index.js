const express = require('express');
const appRoutes = require('./routes/TodoRoutes');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/tarefas', appRoutes);

app.listen(PORT, () => {
  console.log(`Ativo na porta ${PORT}`);
});
