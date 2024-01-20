import React, { useContext, useState } from 'react';
import Timestamp from 'react-timestamp';
import Rating from 'react-rating';
import { AuthContext } from '../Provider/AuthProvider';

const Review = () => {
 const {user} = useContext(AuthContext)
 console.log(user);
 // const handleReview = (e) =>{
 //  e.preventDefault()
 //  // const form = e.target
 //  // const userName = e.target
 //  // const form = e.target
 // }
 const [textareaValue, setTextareaValue] = useState()
 const [timestampValue, setTimestampValue] = useState()
 const handleTextarea = e =>{
  e.prevent.preventDefault;
  setTextareaValue(e.target.value)
  setTimestampValue(new Date().toISOString());
 }
 const handlesubmit = () =>{
  const reviewData = {
   reviewerName: user?.displayName,
   comment: textareaValue,
  }
 }
 return (
  <div className=''>
      <h1>Post a Reviews</h1>
      
       <h1>{user?.displayName}</h1>
       <Rating/>
       <p>Leave a Comment</p>
  <textarea onChange={handleTextarea} className='border border-solid' name="" id="" cols="25" rows="3"></textarea>
       
<button onClick={handlesubmit}>Submit review</button>
     
      
   </div>
  
 
 );
};

export default Review;