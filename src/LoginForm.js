import { useState } from 'react';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <input 
                type="text" 
                name="username"
                placeholder="username"
                value={username}
            />
            <input 
                type="password" 
                name ="password"
                placeholder="password"
                value={password}
            />
            <input type="submit" value="login" />
        </form>
    )
}

export default LoginForm;