'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function FSDPage() {
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3030/test').then((res) => setText(res.data)); //
  }, [text]);

  return (
    <div>
      FSDPage
      <span>{text}</span>
    </div>
  );
}
