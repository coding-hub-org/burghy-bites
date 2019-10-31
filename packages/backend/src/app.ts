import express, { Response, Request } from "express";

import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { Logger } from "@michaelgatesdev/common";

import indexRoute from "./routes/";

import { Route } from "react-router";

export const expressApp: express.Application = express();

export class App {
  // ------------------------------------------------------ \\
  //              Configure express backend
  // ------------------------------------------------------ \\
// my cool comment
  public ROOT_DIR: string = "./";

  public constructor() {}

  public async initialize(): Promise<void> {
    // Setup express stuff
    Logger.debug("Setting up express server...");
    Logger.debug("Setting up express server...");
    this.setupExpress();
    Logger.debug("Finished setting up express server.");

    // create directories
    await this.setupDirectories();
  }

  public setupExpress(): void {
    Logger.debug("Setting up views");
    // view engine setup
    expressApp.set("views", path.join(__dirname, "../views"));
    expressApp.set("view engine", "ejs");

    Logger.debug("Using dev logger");
    expressApp.use(logger("dev"));

    Logger.debug("Setting up middleware");
    expressApp.use(express.json());
    expressApp.use(
      express.urlencoded({
        extended: false
      })
    );
    expressApp.use(cookieParser());

    Logger.debug("Setting up static directories");
    expressApp.use("/images", express.static("public/images"));
    expressApp.use(express.static(path.join(__dirname, "dist")));

    Logger.debug("Setting up routes");
    expressApp.use("/", indexRoute);

    Logger.debug("Setting up static files to serve");
    expressApp.use("*", (_req: Request, res: express.Response): void => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });

    Logger.debug("Setting up error handling");
    //catch 404 and forward to error handler
    expressApp.use((next: express.NextFunction): void => {
      next(createError(404));
    });

    // development error handler
    // will print stacktrace
    if (expressApp.get("env") === "development") {
      expressApp.use((err: any, res: express.Response): void => {
        res.status(err["status"] || 500);
        res.render("error", {
          message: err.message,
          error: err
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    expressApp.use((err: any, res: Response): void => {
      res.status(err.status || 500);
      res.render("error", {
        message: err.message,
        error: {}
      });
    });
  }

  public async setupDirectories(): Promise<void> {}
}

export const app = new App();

// ------------------------------------------------------ \\
