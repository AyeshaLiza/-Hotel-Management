import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useBooking = () => {
const { user } = useContext(AuthContext)
const axios = useAxios()

const {data : myBooking, isLoading, isFetching} = useQuery({
  queryKey: ['booking'],
  queryFn: async () =>{
    const res = await axios.get(`/bookings?email=${user?.email}`);
    // const fetchRes = await res?.json()
    return res;
  }
 })
//  console.log(myBooking, isLoading, isFetching);

  return {myBooking, isLoading, isFetching}
};

export default useBooking;