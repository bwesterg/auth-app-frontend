import { useState } from 'react';
import './SignUpForm.css'


function CreateSignUpForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('username', username);
        console.log('password', password);

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { username, password } })
        })
        .then(response => response.json())
        .then(newUser => console.log(newUser))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                placeholder="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="username"

            />
            <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="password"
            />
            <input 
                type="submit" 
                value="create user" 
                className="submit" 
            />
        </form>
    );
}

export default CreateSignUpForm;