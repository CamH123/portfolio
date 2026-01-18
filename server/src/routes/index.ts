import { Router } from "express";
import { portfolioRouter } from "./portfolio.route";
import { blogRouter } from "./blog.route";
import { adminRouter } from "./admin.route";


export const apiRouter = Router();

// Mount project routes;
apiRouter.use('/projects', portfolioRouter);
apiRouter.use('/experience', portfolioRouter);

// Mount blog routes
apiRouter.use('/blog', blogRouter);

// Mount admin routes
apiRouter.use('/admin', adminRouter);

