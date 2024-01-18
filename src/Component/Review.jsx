import React, { useContext } from 'react';
import Timestamp from 'react-timestamp';
import Rating from 'react-rating';
import { AuthContext } from '../Provider/AuthProvider';
const Review = () => {
 const {user} = useContext(AuthContext)
 const handleReview = (e) =>{
  e.preventDefault()
  // const form = e.target
  // const userName = e.target
  // const form = e.target
 }
 return (
  <div>
   {/* The button to open modal */}
   {/* <a href="#my_modal_8" className="btn">open modal</a> */}
   {/* Put this part before </body> tag */}
   {/* <div className="modal" role="dialog" id="my_modal_8"> */}
    <div className="modal-box">
     <h3 className="font-bold text-lg">Give a Review</h3>
     <form onSubmit={handleReview} className="card-body">
      <div className=' gap-8'>
       <div className="form-control w-full ">
        <h1>
         {user?.displayName}
        </h1>
        <Rating />
        <Timestamp relative date={Date} autoUpdate />
       </div>
       

       <div className="form-control w-full ">
        <label className="label">
         <span className="label-text">Comment Here</span>
        </label>

        <textarea type='text' className="textarea textarea-accent" ></textarea>
       </div>

      </div>


      <div className="form-control mt-6">
       <button className="btn btn-warning">Confirm Booking</button>
      </div>
     </form>

    </div>
    <div className="modal-action">
     <a href="#" className="btn">Yay!</a>
    </div>
   </div>
  // </div>
 
 );
};

export default Review;