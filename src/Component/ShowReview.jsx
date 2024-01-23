import { useEffect, useState } from 'react';

const ShowReview = ({title}) => {
 const [reviews, setReviews] = useState([])
//  const {id} =useParams()
 useEffect(()=>{
  fetch(`http://localhost:8000/api/v1/reviews?title=${title}`)
  .then(res => res.json())
 .then(data => {
  console.log(data);
  setReviews(data)}
  )
 },[])
 return (
  <div>
   <p>
     {reviews?.length >0  && <p>{reviews.length} reviews</p> } </p>
  </div>
 );
};

export default ShowReview;