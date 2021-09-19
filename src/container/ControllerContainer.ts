import { Container } from "inversify";
import { AutorController } from "../controllers/AutorController";
import { IController } from "../controllers/contracts/IController";
import { LivroController } from "../controllers/LivroController";
import ContainerTypes from "./ContainerTypes";

const controllerContainer = new Container();

controllerContainer.bind<IController>(ContainerTypes.Controller).to(LivroController);
controllerContainer.bind<IController>(ContainerTypes.Controller).to(AutorController);

export default controllerContainer;