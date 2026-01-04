import { Router, Express } from "express";
import fs from "fs/promises";
import path from 'path';
import { getProjectBySlug, Project } from "../database";

export const projectsRouter = Router();

// Get Project By Slug
projectsRouter.get('/:slug', async (req, res) => {
    try{
        const {slug} = req.params;
        const project = await getProjectBySlug(slug);

        // Check if the project is found
        if (!project){
            return res.status(404).json({error: "Project not found"});
        } else{
            return res.json(project);
        }
    } catch (error){
        console.error('Error fetching project:', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
});

// Get Project Images by Slug
projectsRouter.get('/:slug/images', async(req, res) => {
    try{
        const {slug} = req.params;
        const project = await getProjectBySlug(slug);

        // check if the project is found
        if(!project){
            return res.status(404).json({error:"Project not found"});
        }
        else{
            const image_folder = project.image_folder;
            if (!image_folder){
                return res.status(404).json({error:"Project images not found"}); 
            }
            else{
                const filesystemPath = path.join(__dirname, '../../../client/public', image_folder);
                const files = await fs.readdir(filesystemPath);
                const imagePaths = files.map(file => `${image_folder}/${file}`);
                return res.json(imagePaths);
            }
        }
    } catch (error){
        console.error('Error fetching project:', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
})