import React from 'react'
import './Login.css'
import SignIn from '../../Images/sign-in.png'

const Login = () => {
  return (
    <div className="login">
      <div className="login-left">
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
            <div>
            <input type="password" name="user_password" className="user" placeholder='password' />
            <span>Show</span>
            </div>
          
          
          <input type="submit" value="Login" className="button" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login