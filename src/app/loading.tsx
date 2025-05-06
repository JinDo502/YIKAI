const Loading = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin'></div>
        <p className='mt-4 text-white font-medium'>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
