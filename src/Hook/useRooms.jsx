import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useRooms = () => {
 const axios = useAxios()
 const getRooms = async ()=>{
  const  res = await axios.get(`/room`)
  return res;
 }
 const {data: myRooms,
  isLoading, isError, error,  isFetching, refetch} = useQuery({ 
  queryKey: ['rooms'], 
  queryFn: getRooms
 })
 return {myRooms, isLoading, isFetching, refetch, isError, error}
};

export default useRooms;

