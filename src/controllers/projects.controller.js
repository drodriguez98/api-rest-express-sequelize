import { Project } from "../../src/models/Project.js"

export const get = async (req, res) => { 

    try {

        const projects = await Project.findAll()
        // console.log(projects)
        res.json(projects)

    } catch (error) { return res.status(500).json({ message: error.message })}

}

export const create = async (req, res) => { 
    
    // console.log(req.body) 

    const { name, priority, description } = req.body

    try {

        const newProject = await Project.create({

            name,
            priority,
            description
    
        })
    
        res.json(newProject)

    } catch (error) { return res.status(500).json({ message: error.message })}

}