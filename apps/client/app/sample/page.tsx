'use client';
import { axiosInstance } from '@/src/shared/config/axios';
import { useEffect, useState } from 'react';

export default function FSDPage() {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchText = async () => {
      axiosInstance
        .get('http://localhost:3030/test')
        .then((res) => setText(res.data));
    };

    fetchText();
  }, [text]);

  return (
    <div>
      FSDPage
      <span>{text}</span>
    </div>
  );
}
