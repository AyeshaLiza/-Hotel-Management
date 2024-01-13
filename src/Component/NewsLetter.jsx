import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const NewsLetter = () => {
 const {user} = useContext(AuthContext)
 const handleRoomOrderForm = e =>{
  e.preventDefault()
  const form = e.target;
  const email = form.email.value
  const name = form.name.value

  const newsLetter = {email, name}
 }
 return (
  <div>
   <div className='text-xl text-center '>
   <h1>
    Sign up for Our Newsletter</h1>
   <h1 >
    Be the first to know about our exclusive deals.</h1>
   </div>
   <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl border border-amber-500">
    <form onSubmit={handleRoomOrderForm} className="card-body">
     <div className=' gap-8'>
      <div className="form-control w-full ">
       <label className="label">
        <span className="label-text">Name</span>
       </label>
       <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
      </div>
      <div className="form-control w-full ">
       <label className="label">
        <span className="label-text">Email</span>
       </label>
       <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
      </div>
     </div>

     <div className='md:flex gap-8'>

     </div>
     <div className="form-control mt-6">
      <button className="btn btn-warning">Subscribe</button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default NewsLetter;