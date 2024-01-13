import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../../Hook/useAxios';

const useRoom = () => {
const { id } = useParams()
const axios = useAxios()

const {data : room} = useQuery({
  queryKey: ['room'],
  queryFn: async () =>{
    const res = await axios.get(`/room/${id}`);
    return res;
  }
 })
//  console.log(room);

  return {room}
};

export default useRoom;