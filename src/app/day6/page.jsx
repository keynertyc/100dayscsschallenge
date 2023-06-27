import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin-ext"],
  display: "swap",
})

const Day6Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-[400px] h-[400px] rounded bg-gradient-to-tr from-[#efbe6c] to-[#ca7c4d] items-center justify-center">
        <div className="flex flex-row w-[320px] h-[300px] bg-white rounded">
          <div className="w-[65%] flex flex-col justify-center p-10 gap-7">
            <div className="flex flex-col items-center gap-3">
              <img src="https://100dayscss.com/codepen/jessica-potter.jpg" className="w-[75px] rounded-full border-[#786451] border-[0.5px] border-double" />
              <div className="text-center text-[#786451]">
                <strong className={`${openSans.className} text-base leading-[0.1rem]`}>Jessica Potter</strong>
                <p>Visual Artist</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className=" border-[#786451] border rounded-full text-[#786451] font-bold h-8 hover:bg-[#786451] hover:text-white ease-in duration-200">
                Follow
              </button>
              <button className=" border-[#786451] border rounded-full text-[#786451] font-bold h-8 hover:bg-[#786451] hover:text-white ease-in duration-200">
                Message
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[35%] gap-[1px]">
            <div className=" w-full h-[33.3%] bg-[#f5e8df] items-center justify-center flex text-[#786451] hover:bg-[#E1CFC2] cursor-pointer ease-in duration-200">
              <div className="text-center ">
                <strong className=" text-[1.25rem] font-semibold">523</strong>
                <p>Posts</p>
              </div>
            </div>
            <div className=" w-full h-[33.3%] bg-[#f5e8df] items-center justify-center flex text-[#786451] hover:bg-[#E1CFC2] cursor-pointer ease-in duration-200">
              <div className="text-center ">
                <strong className=" text-[1.25rem] font-semibold">1387</strong>
                <p>Likes</p>
              </div>
            </div>
            <div className=" w-full h-[33.3%] bg-[#f5e8df] items-center justify-center flex text-[#786451] hover:bg-[#E1CFC2] cursor-pointer ease-in duration-200">
              <div className="text-center ">
                <strong className=" text-[1.25rem] font-semibold">146</strong>
                <p>Follower</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Day6Page