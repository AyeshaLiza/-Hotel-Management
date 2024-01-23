import React, { useContext, useState } from 'react';
import login from '../assets/login/login.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
// import useAxios from '../Hook/useAxios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
// import axios from 'axios';

const Login = () => {
  const [loginError, setLoginError] = useState('') || []
  const location = useLocation()
  const navigate = useNavigate()
  const { signIn, logOut, googleSignIn } = useContext(AuthContext)
  // const axios = useAxios()
  // const url = 'http://localhost:8000/api/v1/auth/access-token'
  const from = location?.state?.from?.pathname  ||  '/'

  
  const handleFormSubmit =async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setLoginError('')


    try {
      // const user =
       await signIn(email, password)       
      // const loggedInUser = user.user.email;
      // console.log(loggedInUser)
     .then((res) =>{
          console.log(res)
      navigate(from ,{replace: true})

      })

      // const res = await axios.post(url, {loggedInUser})
      //   console.log(res);

   
      toast.success('Successfully Logged in!');

    } catch (error) {
      console.log(error.message);
      setLoginError(error.message)
      // toast.error(error.message);
    }

  }
  const handleGoogle  = ()  =>{
  try {
     googleSignIn()
     .then((result)=>{

       toast.success('Google Login successfull!');
     })
  } catch (error) {
    toast.error(error.message);
    setLoginError(error.message)

  }
  }

  return (
    <div>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name='description' content='Hotel Managemenet Website' />
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col border border-blue  border-xl max-w-xl">
          
          <div className="card flex-shrink-0 w-full   shadow-2xl shadow-base-300">
            <h1 className='text-center text-4xl font-semibold text-red-700'>Login</h1>
            <form onSubmit={handleFormSubmit} className="card-body ">



             <div className='flex gap-10'>
             <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered input-primary w-full max-w-xs" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password </span>
                </label>
                <input type="password" name='password' required placeholder="password" className="input input-bordered input-primary w-full max-w-xs" />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {
                loginError &&
                // <div className="toast toast-top toast-center">
                //   <div className="alert alert-info">
                //     <span>{loginError}</span>
                //   </div>

                // </div>
                <p className='text-red-700'>Wrong Password or email</p>
              }

              </div>

              <div>
              <div className="form-control mt-6">
                <button className="btn bg-red-700 text-white text-lg">Login</button>
              </div>

              <div className="form-control mt-6">
                <button onClick={handleGoogle} className="btn btn-primary">Login with Google</button>
              </div>
              <p>New User? Please <Link to='/signup'><button className="btn btn-orange-800 btn-link">Signup</button></Link></p>
              </div>
             </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;