import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowReview = () => {
 const [reviews, setReviews] = useState([])
 const {id} =useParams()
 useEffect(()=>{
  fetch(`http://localhost:8000/api/v1/reviews/${id}`)
  .then(res => res.json())
 .then(data => 
{  console.log(data);
  setReviews(data)}
  )
 },[])
 return (
  <div>
     {reviews.length}
  </div>
 );
};

export default ShowReview;