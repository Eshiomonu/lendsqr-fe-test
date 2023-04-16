import React from 'react'
import './Login.css'
import SignIn from '../../Images/sign-in.png'
import Logo from '../Logo/Logo'

const Login = () => {
  return (
    <div className="login">
      
      <div className="login-left">
      <Logo/>
        <img src={SignIn} alt="" srcset="" />
      </div>
      <div className="login-right">
          <h2>Welcome</h2>
          <p>Enter details to login.</p>
        <div className="login-form">
          <form action="">
            <div className='login-email'>
              <input type="email" name="user_email" className="user" placeholder='Name'/>
            </div>
            <div className='login-password'>
            <input type="password" name="user_password" className="user" placeholder='password' />
            </div>
          
              <div className="forget-password">FORGOT PASSWORD</div>
           
          
          <div className="">
          <input type="submit" value="Login" className="button button-login" />
          </div>
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login