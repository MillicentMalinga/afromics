import React, { useEffect, useState } from 'react';
import {db} from '../firebaseConfig'; // import your firebase configuration

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          
            const data = await db.collection("projects").get();
            setProjects(data.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        };
        fetchData();
    }, []);

    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.short_description}</p>
                    <p>{project.long_description}</p>
                    {/* Add more fields as necessary */}
                </div>
            ))}
        </div>
    );
};

export default Projects;

