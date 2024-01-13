import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import err from '../../assets/Error/err.gif'
const Error = () => {
 const error = useRouteError()
 return (
  <div>
   <div className=' mx-auto'>
    {
     error.status === 404 && <div className='text-center max-w-2xl  mx-auto '>
      <img className='max-w-xl mx-auto' src={err} alt="" />

      
       <Link to={'/'}>
       <button className='px-4 mx-auto py-4 rounded-xl text-black font-semibold text-xl bg-amber-200'>Back to Home</button>
       </Link>
     
     </div>
    }
   </div>
  </div>
 );
};

export default Error;