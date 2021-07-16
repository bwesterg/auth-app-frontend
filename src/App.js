
import { useState, useEffect } from 'react';

import './App.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import ProtectedUsersButton from './ProtectedUsersButton';


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(result => {
          result.error 
            ? console.error(result.error)
            : handleLogin();
      })
    }
  })


  

  return (
    <div className="App">
      <h1>Auth App</h1>
      <h2>Sign Up</h2>
      <SignUpForm />
      <h2>Login</h2>
      <LoginForm handleLogin={handleLogin} />
      {isLoggedIn
        ? <ProtectedUsersButton />
        : null
      }
    </div>
  );
}

export default App;
