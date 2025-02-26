import React, { useState } from 'react';
import axios from 'axios';

export default function Soursecode() {
    // State to store form input values
    const [projectData, setProjectData] = useState({
        project_name: '',
        description: '',
        thumbnail: '',
        demoLink: '',
        githubLink: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send data to the backend
            const response = await axios.post('http://localhost:3000/projects', projectData);
            console.log(response.data); // Handle success
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="container  pt-5">
            <h2>Add Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="project_name" className="form-label">Project Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="project_name"
                        name="project_name"
                        value={projectData.project_name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter project name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="4"
                        value={projectData.description}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter project description"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="thumbnail" className="form-label">Thumbnail URL</label>
                    <input
                        type="url"
                        className="form-control"
                        id="thumbnail"
                        name="thumbnail"
                        value={projectData.thumbnail}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter project thumbnail URL"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="demoLink" className="form-label">Demo Link</label>
                    <input
                        type="url"
                        className="form-control"
                        id="demoLink"
                        name="demoLink"
                        value={projectData.demoLink}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter project demo URL"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="githubLink" className="form-label">GitHub Link</label>
                    <input
                        type="url"
                        className="form-control"
                        id="githubLink"
                        name="githubLink"
                        value={projectData.githubLink}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter project GitHub URL"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
