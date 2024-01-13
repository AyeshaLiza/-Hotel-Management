import { useEffect, useState } from 'react';

// import ImgSliderCard from './ImgSliderCard';
import RoomsCard from '../Component/RoomsCard';
import useAxios from '../Hook/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

const Rooms = () => {
  const roomPriceRange = [

    '$50-$100',
    '$100-$200',
    '$500-$1000'
  ]
  const axios = useAxios()
  const [priceRange, setPriceRange] = useState('')
  const getRooms = async () => {
    const res = await axios.get(`/room?priceRange=${priceRange}`)
    return res;
  }
  const { data: myRooms,
    isLoading, isError, error, isFetching, refetch } = useQuery({
      queryKey: ['rooms', priceRange],
      queryFn: getRooms
    })


  if (isError) {
    return <p>Something Went wrong.. {error}</p>
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rooms</title>
        <meta name='description' content='Hotel Managemenet Website' />
      </Helmet>

      <div className='w-[90%] mx-auto my-5'>
        <h1 className='text-5xl font-semibold text-amber-500 text-center my-10'>Choose Your Room</h1>

        {/* filter */}
        <label className="form-control w-full mb-5  max-w-sm mx-auto">
          <div className="label">
            <span className='text-lg text-amber-600'>Choose Your Room by Price Range</span>
          </div>
          <select className="select select-bordered" onChange={(e) => setPriceRange(e.target.value)}>
            <option disabled selected>Price Range</option>
            {
              roomPriceRange?.map((item) => (
                <option key={item} value={item}>
                  {(item)}
                </option>
              ))
            }
          </select>

        </label>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
          {
            isLoading ?
              <div className='flex justify-center h-screen'><span className="loading loading-spinner loading-lg  "></span></div>
              :
              myRooms?.data?.map((room) => <>
                <RoomsCard key={room.id} room={room}></RoomsCard>

              </>
              )
          }
        </div>
      </div>

    </div>
  );
};

export default Rooms;