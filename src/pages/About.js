import React from 'react';
import coverImage from "../assets/cover/cover-image.jpg";

const About = () => {
    return(
        <section>
            <h3>About me</h3>
            <p>Software Engineer and Web Development Instructor with production experience 
                building web and desktop applications for Fortune 500 companies and venture-backed startups.
                In my spare time I enjoy playing chess, shooting photography, reading and learning new things.
            </p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );

};

export default About;