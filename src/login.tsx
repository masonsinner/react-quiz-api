import React, { useState } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // For testing
    const mockUser: User = {
      id: 1,
      username: 'test',
      email: 'test@test.com',
      password: '123',
    };

    setLoggedInUser(mockUser);

    console.log('User logged in successfully:', mockUser);

    // Perform the necessary actions for a logged-in user
    // You can call additional functions or redirect the user to a new page
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create data object for form values
    const loginData = {
      username: username,
      password: password,
    };

    // API Request
    fetch('https://cae-bookstore.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.status === 204) {
          handleLogin();
          return;
        }
        return response.json();
      })
      .then(data => {
        console.log(`API Response`, data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.log('ERROR LOGGING IN USER', error);
      });
  };

  return (
    <div>
      {loggedInUser ? (
        <p>Welcome, {loggedInUser.username}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
