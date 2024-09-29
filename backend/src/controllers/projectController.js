const express = require('express');
const db = require('../db/projectQueries');
const { validateProject } = require('../models/projectModel'); // Make sure the import is correct

exports.createProject = async (req, res) => {
    const { title } = req.body;
    const user_id = req.user?.userId; 

    if (!title || !user_id) {  
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Validate Data
        const validatedProject = validateProject({ title }); 

        // Combine the validated title with user_id
        const newProjectData = {
            title: validatedProject.title, 
            user_id: user_id                
        };

        // Create New Project
        const newProject = await db.createProject(newProjectData);
        if (newProject) {
            return res.status(201).json({ message: "Project Created Successfully" });
        }

    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ error: error.message });
    }
};


exports.getAllProjects = async(req,res) => {
    try {
        const projects = await db.getAllProjects();
        console.log(projects);
        if(projects.length === 0)
        {
            res.status(404).json({message:"No Projects found"})
        }

        res.status(200).json({
            message:"Projects Retrived Successfully",
            projects : projects
        })
        
    } catch (error) {
       res.status(400).message({message:"Server Error", error: error.message});   
    }

}

exports.updateProjects = async (req, res) => {
    const projectId = req.params.id;
    const { title } = req.body;
    const user_id = req.user?.userId;

    if (!projectId || !title || !user_id) {
        return res.status(400).json({ message: "All the fields are required" });
    }

    try {
        // Validate the incoming project data
        const validatedProject = validateProject({ title});

        // Check if the project exists in the database
        const projectExist = await db.getProjectById(projectId);
        console.log("Project Exist", projectExist)
        if (projectExist.length === 0) {
            return res.status(404).json({ message: "Project Not Found!" });
        }

        // Update the project
        const updatedProject = await db.updateProject({ title, project_id: projectId });
        if (updatedProject.affectedRows > 0) {
            return res.status(200).json({ message: "Project Updated Successfully" });
        }
        

        return res.status(400).json({ message: "Failed to update the project" });
        
    } catch (error) {
        console.error('Error updating project:', error);
        return res.status(500).json({ error: error.message });
    }
};
