import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

const EventInfo = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('http://localhost:3030/user?fields[0]=username&fields[1]=dDay').then((res) => res.json()),
  });

  if (isLoading) return <>Loading...</>;

  return <div>{data}</div>;
};

export default EventInfo;
