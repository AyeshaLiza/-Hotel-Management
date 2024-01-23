import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookRoom = () => {
 const [featuredRoom, setFeaturedRoom] = useState([])   || []
 const {id} = useParams()
useEffect(() =>{
 fetch(`http://localhost:8000/room${id}`)
 .then(res => res.json())
 .then(data => {
 console.log(data)
 setFeaturedRoom(data)
 }
  )
},[])
 return (
  <div>
   
  </div>
 );
};

export default BookRoom;