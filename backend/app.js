const express = require('express');
const helmet  = require('helmet');
const app     = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ data: 'API Lector QR funcionando!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

module.exports = app;