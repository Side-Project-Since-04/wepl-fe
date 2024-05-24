export default function Page(): JSX.Element {
  return (
    <main className='flex flex-col justify-between text-center h-full'>
      <div className='mt-4'>
        <h1>로고</h1>
        <div>슬로건</div>
      </div>
      <div className='mb-4'>
        <button className='p-2 bg-black text-white'>카카오 로그인</button>
      </div>
    </main>
  );
}
