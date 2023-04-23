import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { HttpError } from "http-errors";
import { config } from "./config/config";
import { postsController } from "./modules/posts/posts.controller";
import { usersController } from "./modules/users/users.controller";

export class Server {
  private app = express();
  private config = config;

  start() {
    // init server
    // init config
    // init database -- skip
    // init middlewares
    // init routes
    // init error handling
    // start listening
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  private initMiddlewares() {
    this.app.use(express.json({ limit: "5mb" }));
    this.app.use(morgan("common"));
  }

  private initRoutes() {
    this.app.use("/api/posts", postsController);
    this.app.use("/api/users", usersController);
  }

  private initErrorHandling() {
    this.app.use(
      (err: HttpError, req: Request, res: Response, next: NextFunction) => {
        const statusCode = err.status || 500;
        res.status(statusCode).send({
          message: err.message,
          status: statusCode,
        });
      }
    );
  }

  private startListening() {
    this.app.listen(this.config.port, () => {
      console.log("Server started listening on port", this.config.port);
    });
  }
}
