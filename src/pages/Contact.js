import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        }else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }  
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //change to ternary
        if(!errorMessage){
            console.log("Form Submitted", formState);
        }
    };

    return(
    <section>
        <h1 data-testid="contact">Contact</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    defaultValue={name}
                    onBlur={handleChange}
                />
                </div>
                <div>
                <label htmlFor="email">Email address:</label>
                <input 
                    type="email" 
                    name="email" 
                    defaultValue={email}
                    onBlur={handleChange}
                />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea 
                    name="message" 
                    rows="5"  
                    defaultValue={message}
                    onBlur={handleChange}
                />

                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
               </div>
            <button data-testid="submit" type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
        <div>
        <span>||</span> Connect with me on <a href="https://linkedin.com/in/feliciaogarro" target="_blank" rel="noopener noreferrer"><span>Linkedin</span></a>

        </div>
    </section>

    );
};

export default Contact;