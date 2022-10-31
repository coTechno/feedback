import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='container'>
      <h1>LOGIN</h1>
      <form className='login-form' action="#">
        <input type="text" placeholder='Type Your Name' />
        <input type="email" name="" id="" placeholder='Type Your Email' />
        <button className="btn" type='button'>Submit</button>
      </form>

    </div>
  )
}

export default Login