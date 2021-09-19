import express from 'express';
import { AutorController } from './controllers/AutorController';
import { LivroController } from './controllers/LivroController';

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

new LivroController().forApp(app).registerRouters();
new AutorController().forApp(app).registerRouters();

app.listen(porta, () => {
  console.log('Servidor rodando na porta ' + porta);
});