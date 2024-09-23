import express from 'express';
import bodyParser from 'body-parser';
import filmesRoutes from './routes/filmesRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/filmes', filmesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
