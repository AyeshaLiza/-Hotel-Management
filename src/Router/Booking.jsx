import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Booking = () => {
 const {user} = useContext(AuthContext)

 const handleBookingForm = e =>{
 
  e.preventDefault();
  const email = user?.email
  const name = user?.displayName
  const due = e.target.due.value;
  const date = e.target.date.value;
  const booking = {
   email, name, due, date
  }
 console.log(booking);

 } 
 return (
  <div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-300">
      <form onSubmit={handleBookingForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" name="due" placeholder="Your Due" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
      </form>
    </div>
  </div>
 );
};

export default Booking;