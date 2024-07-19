import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer,toast} from "react-toastify"

const Register = () => {
    const handleSubmit = () => {
    
}
  return (
      <div className='form_container'>
          <h2>Register your account</h2>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={email} placeholder='Enter your email' onChange={handleSubmit} />
              </div>
              <div>
                  <label htmlFor="user">Username</label>
                  <input type="text"
                      name='username'
                      value={username}
                      placeholder='Enter the user name'
                      onChange={handleSubmit}
                  />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password"
                      name='password'
                      value={password}
                      placeholder='Enter your password'
                  onChange={handleSubmit}/>
              </div>
              <button type='submit'>Submit</button>
              <span>Already have an Account? <Link to={"/login"}>Login</Link></span>
          </form>
          <ToastContainer/>
    </div>
  )
}

export default Register