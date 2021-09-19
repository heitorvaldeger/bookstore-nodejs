import { Request, Response } from "express";
import { AbstractController } from "./contracts/AbstractController";

export class AutorController extends AbstractController {
  protected prefixo: string = "/autores";

  private list (req: Request, res: Response) {
    res.send('GET Listar Autores');
  }
  
  private create (req: Request, res: Response) {
    res.send('POST Rota Autor');
  }

  registerRouters () {
    this.forRoute('/').get(this.list);
    this.forRoute('/').post(this.create);
  }
}