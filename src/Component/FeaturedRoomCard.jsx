import { useState } from 'react';

const FeaturedRoomCard = ({ featured }) => {
 const { _id, button, detail, roomImg, title} = featured || []
 const { descr } = detail || []
//  const { offer1, offer2  } = specialOffers || []

 const [showFullDescr, setShowFullDescr] = useState(false) || []
 const toggleDescr = () =>{
  setShowFullDescr(!showFullDescr);
 };
 const shortenedDescr = showFullDescr? descr : descr.length > 12 ? `${descr.slice(0, 50)}...`  : descr;
 return (

   <div>
   <div className="card lg:w-80 h-80 mx-auto shadow-xl shadow-zinc-400">
  <figure><img src={roomImg} alt="Room" /></figure>
  <div className="card-body">

  <div data-aos="fade-left" >
    <p>{shortenedDescr}{descr.length > 50 && (
    <button className='text-black font-semibold' onClick={toggleDescr}>{showFullDescr? 'Read Less' : 'Read More'}</button>
    )}
    </p>
    </div>
  </div>
</div>
   </div>

 );
};

export default FeaturedRoomCard;