import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `[${new Date().toISOString()}] Endpoint chamado: ${req.method} ${
        req.baseUrl
      }${req.path}`
    );
    next();
    console.log(
      `[${new Date().toISOString()}] Resposta enviada: ${res.statusCode}`
    );
  }
}
