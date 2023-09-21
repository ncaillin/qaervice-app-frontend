import './Login.css';
import { useState } from 'react';
import cat from '../images/cat.png';
import Input from '../components/Input';
import Alert from '../components/Alert';
import axios from 'axios'

const {
  BACKEND_URL = 'http://localhost:3001'
} = process.env


const Login = () => {
  
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [type, setType] = useState('null');
  const [message, setMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    window.location.href = '/register';
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/misc/login`, {email, password}, {withCredentials: true})
      console.log(response)
      if (response.data.type === 'Owner')
      {
        return window.location.href = '/home'
      }
      return window.location.href = '/employeeApp/home'
    } catch(err) {
      setType('error')
      setMessage(err.response.data.error)
      setTimeout(() => {
        setType('null')
      }, 3000)
    }
  }

  const validateEmail = (test=email) => {
    const valid = test.length === 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(test); 
    if (!valid) {
      return('invalid email');
    }
  }
  const validatePassword = (test=password) => {
    if (test.length === 0) {
      return;
    };
    if (test.length < 6) {
      return('too short');
    };
  }

  return (
    <section className="loginWrapper">
      <Alert type={type} message={message}/>
      <aside className="loginDecorationAside">
        <h2>Log In Today</h2>
        <img src={cat} className="loginCat"/>
      </aside>
      <form className="loginForm">
        <Input placeholder="email" validator={validateEmail} setter={setEmail}></Input>
        <Input placeholder="password" type="password" validator={validatePassword} setter={setPassword}> </Input>
        <button type="submit" className="filledButton" onClick={handleLogin}>log in</button>
        <article>
          <p>don't have an account?</p>
          <button className="filledButton" onClick={e => handleRegister(e)}>register</button>
        </article>
      </form>
    </section>
  );
};

export default Login
