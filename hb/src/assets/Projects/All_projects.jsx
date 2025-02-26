import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const All_projects = () => {
    const [projects, setProjects] = useState([]);

    // Fetch projects when the component mounts
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:3000/projects/getallprojects');
                setProjects(res.data);
                console.log(res.data); 
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="projects-section pt-5">
            <h2>All Projects</h2>
            <div className="projects-container topspace row mb-4"> {/* Added mb-4 for margin at the bottom */}
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4  mb-4">
                        <div className="m-2 shadow">
                            <div className="card">
                                <img
                                    src={project.thumbnail}
                                    alt={project.name}
                                    className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <div className="project-links">
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            Live Demo
                                        </a>
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default All_projects;
