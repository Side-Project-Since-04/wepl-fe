import { supabase } from '@/src/shared/utils/supbase';
import React from 'react';

const page = async () => {
  const { data, error } = await supabase.from('classification').select('*');
  console.log(data);
  return (
    <div>
      {data.map((a: any) => (
        <div>{a.name}</div>
      ))}
    </div>
  );
};

export default page;
