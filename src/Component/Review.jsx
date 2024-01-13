import React from 'react';

const Review = () => {
 return (
  <div>
   {/* The button to open modal */}
   <a href="#my_modal_8" className="btn">open modal</a>
   {/* Put this part before </body> tag */}
   <div className="modal" role="dialog" id="my_modal_8">
    <div className="modal-box">
     <h3 className="font-bold text-lg">Give a Review</h3>
     <form onSubmit={handleReview} className="card-body">
      <div className=' gap-8'>
       <div className="form-control w-full ">
        <label className="label">
         <span className="label-text">Name</span>
        </label>
        <input type="name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
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
  </div>
  </div >
 );
};

export default Review;