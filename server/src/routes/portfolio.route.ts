import { Router } from "express";
import { PortfolioController } from "../controllers/portfolio.controller";

export const portfolioRouter = Router();

// Get Project By Slug
portfolioRouter.get('/:slug', PortfolioController.getProject);

// Get Project Images by Slug
portfolioRouter.get('/:slug/images', PortfolioController.getProjectImages)