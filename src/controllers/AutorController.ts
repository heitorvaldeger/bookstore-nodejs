import { Application, IRoute, Request, Response } from "express";

export class AutorController {
  private app?: Application;
  private prefixo: string = "/autores";

  private list (req: Request, res: Response) {
    res.send('GET Listar Autores');
  }
  
  private create (req: Request, res: Response) {
    res.send('POST Rota Autor');
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