import './Register.css';
import { useState } from 'react';
import cat from '../images/cat.png';
import Input from '../components/Input';
import Alert from '../components/Alert'
import axios from 'axios'
import { BACKEND_URL } from '../utils/env'


const Register = () => {
  
  const [email, setEmail]  = useState('');
  const [repEmail, setRepEmail] = useState('')
  const [pass, setPass] = useState('');
  const [repPass, setRepPass] = useState('');
  const [name, setName] = useState('')

  const [message, setMessage] = useState('')
  const [type, setType] = useState('null')


  const handleLoginSwitch = (e) => {
    e.preventDefault();
    window.location.href = '/login'
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

  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    
    if 
    (email !== repEmail)
    {
      setMessage('emails do not match')
      setType('error')
      setTimeout(() => 
      {
        setType('null')
      }, 3000)
      return
    }
    if (pass !== repPass)
    {
      setMessage('passwords do not match')
      setType('error')
      setTimeout(() => 
      {
        setType('null')
      }, 3000)
      return
    }

    try 
    {
      const response = await axios.post(`${BACKEND_URL}/owner/register`,
        {
          name,
          email,
          password: pass
        })
      if (response.status === 201)
      {
        window.location.href='/login?alert=success'
        return
      }
    } catch (err)
    {
      setMessage(err.response.data.error)
      setType('error')
      setTimeout(() => 
      {
        setType('null')
      }, 3000)
    }
  }


  return (
    <section className="registerWrapper">
      <Alert type={type} message={message} />
      <aside className="registerDecorationAside">
        <h2>Register now</h2>
        <img src={cat} className="registerCat"/>
      </aside>
      <form className="registerForm" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <Input placeholder="name" setter={setName}></Input>
          </div>
        <div>
          <Input placeholder="email" setter={setEmail} validator={validateEmail}/>
          <Input placeholder="repeat email" setter={setRepEmail} validator={validateRepEmail}/>
        </div>
        <div>
          <Input type="password" placeholder="password" setter={setPass}/>
          <Input type="password" placeholder="repeat password" setter={setRepPass}/>
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
