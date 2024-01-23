
import { Link } from 'react-router-dom';
import ShowReview from './ShowReview';

const RoomsCard = ({room}) => {
 const {_id, roomImg, title} = room || {}

 return (
  <div>
  <Link to={`/room/${_id}`}>
  <div className="card lg:w-80  mx-auto shadow-xl shadow-zinc-400">
  <figure><img src={roomImg} alt="Room" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <ShowReview></ShowReview>
 
  </div>
</div>
  </Link>
  </div >
 );
};

export default RoomsCard;