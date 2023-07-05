'use client'

import { Open_Sans } from "next/font/google"
import { useState } from "react"

const openSans = Open_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin-ext"],
  display: "swap",
})

const Day7Page = () => {
  const [searchInput, setSearchInput] = useState(false)
  const [searchInputClass, setSearchInputClass] = useState("opacity-0")

  const handleSearchInput = () => {
    setSearchInput(!searchInput)
    setSearchInputClass(searchInput ? "opacity-0 animate-fade-in-left" : "animate-fade-in-right")
  }
    

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex w-[400px] h-[400px] rounded bg-[#264057] items-center justify-center">
        <div className="flex w-[300px] h-[300px] rounded bg-white flex-col">

          <div className="flex h-[60px] bg-[#5f98cc] flex-row justify-between items-center p-5 relative">

            <div className={searchInput ? `-z-10 flex flex-col space-y-1 cursor-pointer group` : `z-10 ease-in duration-700 flex flex-col space-y-1 cursor-pointer group`}>
              <div className="flex flex-row items-center gap-[2px]">
                <div className=" h-[3px] w-[20px] bg-[#b2dafe] rounded group-hover:bg-white ease-in duration-200"></div>
                <div className=" h-[6px] w-[6px] bg-[#b2dafe] rounded-full group-hover:bg-white ease-in duration-200"></div>
              </div>
              <div className="flex h-[3px] w-[28px] bg-[#b2dafe] rounded group-hover:bg-white ease-in duration-200"></div>
            </div>

            <div className="flex">
              <p className="text-base font-medium text-white">Notifications</p>
            </div>

            <div className="flex">
              <button onClick={handleSearchInput}>
                <svg class="w-6 h-6 text-blue-200 stroke-[#b2dafe] hover:stroke-white ease-in duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
            
            <div className={`${searchInputClass} absolute w-[220px] h-[30px] rounded-3xl bg-white`}>
              <input className="w-full h-full pl-5 rounded-full outline-none" placeholder="Search ..." />
            </div>
            
          </div>
          
          <div className={`${openSans.className} flex flex-col pl-7 pr-5`}>

            <div className="flex group flex-col border-l-[#ededed] border-l-[4px] h-[80px] pt-5 pr-2 pl-2 text-[#666666] relative">
              <div className="absolute group-hover:text-[#5f98cc] cursor-pointer h-2.5 w-2.5 border-[#5f98cc] border-[2px] bg-white rounded-full -left-[0.44rem] top-[1.45rem] outline outline-2 outline-white"></div>
              <div className="flex flex-col group-hover:text-[#5f98cc] cursor-pointer">
                <p className="block text-xs">9:24 AM</p>
                <p className="block text-sm"><b>John Walker</b> posted a photo on your wall.</p>
              </div>
            </div>

            <div className="flex group flex-col border-l-[#ededed] border-l-[4px] h-[80px] pt-5 pr-5 pl-2 text-[#666666] relative">
            <div className="absolute group-hover:text-[#5f98cc] cursor-pointer h-2.5 w-2.5 border-[#5f98cc] border-[2px] bg-white rounded-full -left-[0.44rem] top-[1.45rem] outline outline-2 outline-white"></div>
              <div className="flex flex-col group-hover:text-[#5f98cc] cursor-pointer">
                <p className="block text-xs">8:19 AM</p>
                <p className="block text-sm"><b>Alice Parker</b> commented your last post.</p>
              </div>
            </div>

            <div className="flex group flex-col border-l-[#ededed] border-l-[4px] h-[80px] pt-5 pr-2 pl-2 text-[#666666] relative">
            <div className="absolute group-hover:text-[#5f98cc] cursor-pointer h-2.5 w-2.5 border-[#5f98cc] border-[2px] bg-white rounded-full -left-[0.44rem] top-[1.45rem] outline outline-2 outline-white"></div>
              <div className="flex flex-col group-hover:text-[#5f98cc] cursor-pointer">
                <p className="block text-xs">Yesterday</p>
                <p className="block text-sm"><b>Luke Wayne</b> added you as friend.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Day7Page