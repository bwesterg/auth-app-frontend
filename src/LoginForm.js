import { useState } from 'react';
import './LoginForm.css'

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault()

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: {username, password} })
        })
        .then(response => response.json())
        .then(result => {
            if(result.error) {
                console.error(result.error);
            } else {
                localStorage.setItem('token', result.token);
                props.handleLogin();
            }
        });
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username"
                placeholder="username"
                value={username}
                onChange={event =>setUsername(event.target.value)}
            />
            <input 
                type="password" 
                name ="password"
                placeholder="password"
                value={password}
                onChange={event =>setPassword(event.target.value)}
                className="login-submit"
            />
            <input type="submit" value="login" className="login-submit" />
        </form>
    )
}

export default LoginForm;