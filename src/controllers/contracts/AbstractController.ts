import { Application, IRoute } from "express";
import { injectable } from "inversify";
import { IController } from "./IController";

@injectable()
export abstract class AbstractController implements IController {
  private app?: Application;
  protected abstract prefixo: string;

  forApp (app: Application) {
    this.app = app;

    return this;
  }

  forRoute (path: string) : IRoute {
    return this.app?.route(`${this.prefixo}${path}`) as IRoute
  }

  abstract registerRouters () : void;
}