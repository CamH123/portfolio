import { Router } from "express";
import { projectsRouter } from "./projects";

export const apiRouter = Router();

// Mount project routes;
apiRouter.use('/projects', projectsRouter);

