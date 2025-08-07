import React from 'react'

export default function Authentication() {
  return (
    <>
    <h2 className = "sign-up-text">Sign up / Login</h2>
    <p>Sign in to your account to continue</p>
    <input type="text" placeholder='Email' />
    <input type="password" placeholder='Password' />
    <button><p>Submit</p></button>
    <hr />
    <div className='register-content'>
      <p>Don't have an account?</p>
      <button><p>Register</p></button>
    </div>
    </>
  )
}
