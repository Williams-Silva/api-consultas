const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const {sequelize} = require('./models');
const clienteRoutes = require('./routes/clienteRoutes.js');
const medicoRoutes = require('./routes/medicoRoutes.js');
const consultaRoutes = require('./routes/consultaRoutes.js');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', clienteRoutes);
app.use('/', medicoRoutes);
app.use('/', consultaRoutes);

app.listen(process.env.PORT, async () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  });