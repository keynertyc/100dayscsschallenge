'use client'
import { useState } from 'react';

const Day2Page = () => {
  const [showCross, setShowCross] = useState(false);

  const handleClick = () => {
    setShowCross(!showCross);
  }

  return (
    <div className={`flex items-center justify-center h-screen`}>
      <div className='bg-[#3faf82] h-[400px] w-[400px] uppercase flex flex-col items-center justify-center text-white relative'>
        <div id="lines" className={`flex flex-col w-[80px] gap-[14px] ${showCross ? 'opacity-0' : 'opacity-100'} transition-all duration-1000 ease-in-out absolute`} onClick={handleClick}>
          <div className="bg-white rounded shadow h-[10px]"></div>
          <div className="bg-white rounded shadow h-[10px]"></div>
          <div className="bg-white rounded shadow h-[10px]"></div>
        </div>
        <div id="cross" className={`flex flex-row h-[80px] w-[80px] justify-between relative ${showCross ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 ease-in-out absolute`} onClick={handleClick}>
          <div className="flex bg-white rounded w-[10px] h-[80px] shadow -rotate-45 absolute top-0 left-[35px]"></div>
          <div className="flex bg-white rounded w-[10px] h-[80px] shadow rotate-45 absolute top-0 left-[35px]"></div>
        </div>
      </div>
    </div>
  )
}

export default Day2Page