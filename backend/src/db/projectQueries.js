const conn = require('./config');


const createProject = async (data) => {
    const {title, user_id} = data;
    const query = `INSERT INTO projects(title, user_id) VALUES (?, ?)`
    const [rows] = await conn.promise().query(query, [title, user_id]); 
    return rows;
}


const getAllProjects = async() => {
    const query = `SELECT * FROM projects`;
    const [rows] = await conn.promise().query(query);
    return rows;
}

const getProjectById = async (id) => {
    const query = `SELECT * FROM projects WHERE projects.id = ?`;
    const [rows] = await conn.promise().query(query, [id]); // Pass as an array
    return rows;
}

const updateProject = async (data) => {
    const { title, project_id } = data;
    const query = `UPDATE projects SET title = ? WHERE id = ?`;
    const [rows] = await conn.promise().query(query, [title, project_id]);
    return rows;
};


const deleteProject = async (id) => {
    const project_id = id;
    const query = `UPDATE projects SET status = 'Inactive' WHERE id = ?`;
    const [rows] = await conn.promise().query(query, [project_id])
}

module.exports = {createProject, getAllProjects, getProjectById, updateProject, deleteProject};
