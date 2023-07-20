import './Register.css';
import { useState } from 'react';
import cat from '../images/cat.png';
import Input from '../components/Input';


const Register = () => {
  
  const [email, setEmail]  = useState('');
  const [repEmail, setRepEmail] = useState('')
  const [pass, setPass] = useState('');
  const [repPass, setRepPass] = useState('');

  const handleLoginSwitch = (e) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  const validateEmail = (test = email) => {
    const valid = test.length === 0 || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(test); 
    if (!valid) {
      return('invalid email');
    }
  }
  const validateRepEmail = (test = repEmail) => {
    if (test.length === 0) {
      return;
    };
    let invalid = validateEmail(test);
    if (invalid) {
      return('invalid email');
    };
    if (test !== email) {
      return('emails must match');
    };
  };


  return (
    <section className="registerWrapper">
      <aside className="registerDecorationAside">
        <h2>Register now</h2>
        <img src={cat} className="registerCat"/>
      </aside>
      <form className="registerForm">
        <div>
          <Input placeholder="email" setter={setEmail} validator={validateEmail}/>
          <Input placeholder="repeat email" setter={setRepEmail} validator={validateRepEmail}/>
        </div>
        <div>
          <Input type="password" placeholder="password" />
          <Input type="password" placeholder="repeat password"/>
        </div>
        <button type="submit" className="filledButton">register</button>
        <article>
          <p>already have an account?</p>
          <button className="filledButton" onClick={e => handleLoginSwitch(e)}>log in</button>
        </article>
      </form>
    </section>
  );
};

export default Register
