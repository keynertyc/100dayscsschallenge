import { Courier_Prime } from 'next/font/google'

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin-ext',],
  display: 'swap',
})

const Day1Page = () => {
  return (
    <div className={`${courierPrime.className} flex items-center justify-center h-screen`}>
      <div className='bg-gradient-to-tr from-[#43399f] to-[#4ec6ca] h-[400px] w-[400px] uppercase flex flex-col items-center justify-center text-white'>
        <div className='relative z-10 flex flex-row w-40 h-24 mb-5 -left-[15px]'>
          <div className='w-[18px] h-[40px] bg-[#eeeeee] shadow-md rotate-45 rounded absolute -left-[14px]'></div>
          <div className='w-[22.5px] h-[100px] bg-white shadow-md rounded absolute left-0'></div>
          <div className='w-[100px] h-[100px] border-white border-[22.5px] shadow-md rounded-[50%] box-border absolute left-4 -z-10'></div>
          <div className='w-[100px] h-[100px] border-white border-[22.5px] shadow-md rounded-[50%] box-border absolute left-[100px] -z-20'></div>
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold text-[80px] leading-10'>Days</p>
          <p className='text-2xl font-semibold'>Css Challenge</p>
        </div>
      </div>
    </div>
  )
}

export default Day1Page