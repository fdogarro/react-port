import React from 'react';
import resumeFile from "../assets/resume/FeliciaOGarro-cv.pdf";

const Resume = () => {
    const skills = [
        {   id:'1',
            category: 'Front-end',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Angular.js', 'Bootstrap']
        },
        {
            id:'2',
            category: 'Back-end',
            technologies: ['Node.js', 'Postgres', 'Sequelize', 'Python']
        }
    ];
    return(
        <section>
            <h1>Resume</h1>
            <span>Download my <a href={resumeFile} download>resume</a></span>
            {skills.map((skill) => (
            <ul>
                <li
                key={skill.id}
                >{skill.category}
                </li>
                <ul>
                {skill.technologies.map((tech) => (
                    <li
                    key={tech}
                    >{tech}
                    </li>
                ))}
                </ul>
            </ul>
            ))}
        </section>
    );

};

export default Resume;