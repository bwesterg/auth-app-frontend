
import './App.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm'


function App() {
  console.log('hello world')
  return (
    <div className="App">
      <h1>Auth App</h1>
      <h2>Sign Up</h2>
      <SignUpForm />
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

export default App;
