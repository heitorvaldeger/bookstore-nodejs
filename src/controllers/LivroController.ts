import { Request, Response } from "express";
import { AbstractController } from "./contracts/AbstractController";

export class LivroController extends AbstractController {
  protected prefixo: string = '/livros';

  private list (req: Request, res: Response) {
    res.send('GET Listar Livros');
  }
  
  private create (req: Request, res: Response) {
    res.send('POST Rota Livros');
  }

  registerRouters () {
    this.forRoute('/').get(this.list);
    this.forRoute('/').post(this.create);
  }
}