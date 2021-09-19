import { Application, IRoute, Request, Response } from "express";

export class LivroController {
  private app?: Application;
  private prefixo: string = '/livros';

  private list (req: Request, res: Response) {
    res.send('GET Listar Livros');
  }
  
  private create (req: Request, res: Response) {
    res.send('POST Rota Livros');
  }

  forApp (app: Application) {
    this.app = app;

    return this;
  }

  forRoute (path: string) : IRoute {
    return this.app?.route(`${this.prefixo}${path}`) as IRoute
  }

  registerRouters () {
    this.forRoute('/').get(this.list);
    this.forRoute('/').post(this.create);
  }
}