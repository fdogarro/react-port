import React from 'react';

const Project = () => {
    const projects = [
        {
            name: 'Covid Tweets',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            githubUrl:'https://github.com/fdogarro/nlp',
            webUrl:'https://github.com/fdogarro/nlp'
          },
          {
            name: 'Front End Challenges',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            githubUrl:'https://github.com/fdogarro/front-end-challenge',
            webUrl:'https://github.com/fdogarro/front-end-challenge'
          },
          {
            name: 'Vue Talk',
            description: 'Lorem ipsum dolor sit amet, consectetur',
            githubUrl:'https://github.com/fdogarro/vue-talk',
            webUrl:'https://github.com/fdogarro/vue-talk'
          }
    ];

    return(
        <div>
            <div className="flex-row">
                {projects.map((project, i) => (
                <div>
                  <img
                      src={require(`../../assets/project/photos/${i}.jpg`).default}
                      alt={project.name}
                      className="img-thumbnail mx-1"
                      key={project.name}
                  />
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  <p>Github Url: {project.githubUrl}</p>
                  <p>Website Url: {project.webUrl}</p>
                  </div>
                ))}
            </div>
        </div>
    );

};

export default Project;