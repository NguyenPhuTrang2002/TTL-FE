import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center'>

      <button className='flex items-center rounded-lg w-10 h-10 animate-spin mr-3 '>
        <img src="/icons/loading.svg" alt="loading" />
      </button>
      <span className='font-medium'>
        Loading...
      </span>
    </div>
  );
}

export default Loading;
