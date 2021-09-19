import "reflect-metadata";
import express from 'express';
import ContainerTypes from './container/ContainerTypes';
import controllerContainer from './container/ControllerContainer';
import { IController } from './controllers/contracts/IController';

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const controllers: IController[]
  = controllerContainer.getAll<IController>(ContainerTypes.Controller);

controllers.forEach(controller => {
  controller.forApp(app).registerRouters();
})

app.listen(porta, () => {
  console.log('Servidor rodando na porta ' + porta);
});