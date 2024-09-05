// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const vehicleRoutes = require('./src/routes/vehicleRoutes');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://f-veiculos-ncb9ii71m-alefs-projects-16b120f4.vercel.app/' // Substitua pela URL do seu front-end
}));
const PORT = process.env.PORT || 5000;

// Middleware para parsing do body
app.use(express.json());

// Configuração das rotas
app.use('/api/vehicles', vehicleRoutes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
