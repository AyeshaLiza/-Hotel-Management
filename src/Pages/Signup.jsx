import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import axios from 'axios';


const Signup = () => {
 const [sigupError, setSignupError] = useState([]) || []
 const {signUp, googleSignIn, profileInfo} = useContext(AuthContext)

 const handleFormSubmit = async e => {

  e.preventDefault();
  const displayName  = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const photoURL = e.target.photo.value;
  console.log(displayName , photoURL, email, password);
  setSignupError('')

 try {
  const result =   signUp(  email, password)
  
      // const loggedInUser = user.user.email;
    // console.log(loggedInUser)
    // const res = await axios.post(url, {loggedInUser})
    //   console.log(res);
    axios.post('http://localhost:8000/api/v1/auth/access-token',result?.user?.email, {
       withCredentials: true
      })
      .then(res =>{
       console.log('token response', res.data);
       toast.success('Successfully signup');
      }) 
     
  
    // UserName & Profile 
    const updateProfile = await profileInfo(displayName, photoURL)
    console.log(updateProfile);
 } catch (error) {
  console.log(error.message);
      setSignupError(error.message);
 }
}

const handleGoogle = () => {
  googleSignIn()
  .then((result) => {
    console.log(result.user);
    axios.post('http://localhost:8000/api/v1/auth/access-token',result?.user?.email, {
       withCredentials: true
      })
      .then(res =>{
       console.log('token response', res.data);
       toast.success('Successfully signup');
      }) 
  })
}

 return (
  <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
        <meta name='description' content='Hotel Managemenet Website' />
      </Helmet>
 <div className="hero bg-blue-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
            <form onSubmit={handleFormSubmit} className="card-body">

                {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text" >Name</span>
                </label>
                <input type="text" placeholder=" name" name='name' className="input input-bordered input-primary w-full max-w-xs" required/>
              </div>

                {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="You email here" name='email' className="input input-bordered input-primary w-full max-w-xs " required />

              </div>

              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Give your password" className="input input-bordered input-primary w-full max-w-xs" required />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {
                sigupError &&
                <span className='text-red-700'>{sigupError}</span>
              }

              {/* photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                {/* <input type="file" name='photo' placeholder="Upload your Photo" className="input input-bordered input-primary w-full max-w-xs" required /> */}
                <input type="file" name="photo" id="photo" placeholder="Upload your Photo" required/>
              </div>
              <img src="" alt="" id='myImg' />


              <div className="form-control mt-6">
                <button className="btn bg-blue-500">Signup</button>
              </div>

              <div className="form-control mt-2">
                <button type='button' onClick={handleGoogle} className="btn bg-blue-500">Login with Google</button>
              </div>
              <p> Already have an account?<Link to='/login'><button className="btn btn-active btn-link">Login Here</button></Link></p>
            </form>
            <div>
              <img src="" alt="" />
            </div>

          </div>
        </div>
      </div>

  </div>
 );
};

export default Signup;