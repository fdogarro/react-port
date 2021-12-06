import React from 'react';

const Project = () => {
    const projects = [
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          }
    ];

    // const currentProjects = projects.filter((project) => project.category === category);
    return(
        <div>
            <div className="flex-row">
                {projects.map((project, i) => (
                <img
                    src={require(`../../assets/project/${project.category}/${i}.jpg`).default}
                    alt={project.name}
                    className="img-thumbnail mx-1"
                    key={project.name}
                />
                ))}
            </div>
        </div>
    );

};

export default Project;