import React, { useContext, useState } from 'react';
import Timestamp from 'react-timestamp';
import Rating from 'react-rating';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Review = ({title}) => {
  const { user } = useContext(AuthContext)

  const [textareaValue, setTextareaValue] = useState()
  const [ratingValue, setratingValue] = useState()

  const handleRating = value => {
    setratingValue(value)
  }
  const handleTextarea = e => {
    setTextareaValue(e.target.value)
  }
  const handleSubmit = () => {
    const reviewData = {
      roomTitle: title,
      reviewerName: user?.displayName,
      ratingValue: ratingValue,
      comment: textareaValue,
    }
    fetch('http://localhost:8000/api/v1/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then(res => res.json())
      .then(data => {
            console.log(data);
        if (data.acknowledged === true) {
          Swal.fire({
            title: 'success!',
            text: 'Review Posted Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      }
      )
  }
  return (
    <div className=''>
      <h1>Post a Reviews</h1>

      <div>
        <h1>{user?.displayName}</h1>
        <Rating onChange={handleRating} />
        <p>Leave a Comment</p>
        <textarea name='comment' onChange={handleTextarea} className='border border-solid'  id="" cols="25" rows="3"></textarea>
      </div>

      <div>
        <button className='btn btn-outline' onClick={handleSubmit}> Post</button>

      </div>

    </div>


  );
};

export default Review;