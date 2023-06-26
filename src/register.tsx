import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };
    
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Create data object for form values 
        const registerData = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
        };
        
        // API Request
        fetch('https://cae-bookstore.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (response.status === 204) {
                console.log('Form submitted successfully');
                return null;
            }
            return response.json();
        })
        .then(data => {
            console.log('API RESPONSE', data);
            // Handle the response data as needed
        })
        .catch(error => {
            console.error('ERROR WHEN SUBMITTING FORM', error);
        });
    };
        
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="first_name">First Name: </label>
                <input type="text" id="first_name" value={first_name} onChange={handleFirstNameChange}/>
                <br></br>
                <label htmlFor="last_name">Last Name: </label>
                <input type="text" id='last_name' value={last_name} onChange={handleLastNameChange}/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id='email' value={email} onChange={handleEmailChange}/>
                <br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};

export default RegisterForm;
