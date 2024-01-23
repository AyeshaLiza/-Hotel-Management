import { useContext, useEffect, useState } from 'react';

import MyBookingCard from '../../Component/MyBookingCard';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Provider/AuthProvider';
import moment from 'moment';

const MyBooking = () => {
  // const { myBooking } = useBooking()
const { user } = useContext(AuthContext)
const url = `http://localhost:8000/api/v1/roomBookings?email=${user?.email}`
const [bookings, setBookings] = useState([])     
useEffect(() => {

   fetch(url)
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    setBookings(data)})
}, [url])

  // const { data } = myBooking || {}
  
  // console.log(data);

  // handle Delete
  const handleDlt = (id, changedDate) => {
      console.log(changedDate);
      moment().startOf('day').fromNow();  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          console.log('deleted');
          fetch(`http://localhost:8000/api/v1/bookings/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data?.deletedCount > 0) {

                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });

                const remaining = bookings?.filter(booking => booking._id !== id)
                setBookings(remaining)
              }
            }
            )
        }
      }
      )
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bookings</title>
        <meta name='description' content='Hotel Managemenet Website' />
      </Helmet>
      
      <div className='overflow-x-auto  mx-auto'>
        <table className="table min-w-full">
          {/* head */}
          <thead className='bg-base-200'>
            <tr>
              <th>
                <label>
                </label>
              </th>
              <th>Room</th>
              <th >User Info</th>
              <th>Price</th>
              <th>Room Size</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookings?.map((booking) => <MyBookingCard
                key={booking._id}
                booking={booking}
                handleDlt={handleDlt}

              ></MyBookingCard>
            )
            }

          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyBooking;