
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {ToastContainer,toast} from "react-toastify"
axios.defaults.withCredentials = true;
const Register = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        email: "",
        username: "",
        password:"",
    })

    const { email, password, username } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]:value,
        })
    }


    const handleErrorToast = (err) => {
        toast.error(err, { position: "top-center" })
    };
    const handleSuccess = (msg) => {
        toast.success(msg, { position: 'top-center' })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/signUp", { ...inputValue, }, { withCredentials: true })
            const { success, message } = data;
            console.log(data);
            if (success) {
                handleSuccess(message);
                navigate("/")
            } else {
                handleErrorToast(message);
            }
        } catch (err) {
            console.log(err);
        }
        setInputValue({
            inputValue,
            email: "",
            password: "",
            username:"",
        })
    }

  return (
      <div className='form_container'>
          <h2>Register your account</h2>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={email} placeholder='Enter your email' onChange={handleOnChange} />
              </div>
              <div>
                  <label htmlFor="user">Username</label>
                  <input type="text"
                      name='username'
                      value={username}
                      placeholder='Enter the user name'
                      onChange={handleOnChange}
                  />
              </div>
              <div>
                  <label htmlFor="password">Password</label>
                  <input type="password"
                      name='password'
                      value={password}
                      placeholder='Enter your password'
                  onChange={handleOnChange}/>
              </div>
              <button type='submit'>Submit</button>
              <span>Already have an Account? <Link to={"/login"}>Login</Link></span>
          </form>
          <ToastContainer/>
    </div>
  )
}

export default Register