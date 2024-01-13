import { useEffect, useState } from 'react';
import RoomDetailCard from '../../Component/RoomDetailCard';
import { useParams } from 'react-router-dom';

const RoomDetail = () => {
  
 const [roomDetails, setRoomDetails] = useState([]) || []
 const [filteredDetail, setFilteredDetail] = useState([]) || []
 const {_id} = useParams();

 useEffect(() => {
  fetch(`http://localhost:5000/api/v1/room`)
   .then(res => res.json())
   .then(data => {
    // console.log(data)
    setRoomDetails(data)
   }
   )
 }, [])

 useEffect(() => {
const   findRoomDetail = roomDetails?.filter((roomDtail) => roomDtail._id == _id)
  // console.log(findRoomDetail);
  setFilteredDetail(findRoomDetail)

 }, [_id, roomDetails])
 
 return (
  <div>

   <div className='mx-auto my-5'>
  
    <div className=' my-5'>
     {
      filteredDetail?.map((filtered) => <>
      
       <RoomDetailCard key={filtered._id} filtered={filtered}></RoomDetailCard>
      </>
      )
     }
    </div>
   </div>
  </div>
 );
};

export default RoomDetail;