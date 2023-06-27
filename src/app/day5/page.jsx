const Day5Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] h-[400px] bg-[#43a7a1] rounded flex items-center justify-center">
        <div className="w-[280px] h-[220px] bg-white rounded flex flex-col">
          <div className=" bg-[#f0ba63] h-[60px] flex flex-row justify-between text-white p-2 rounded-t">
            <div className="flex flex-col">
              <p className="text-base font-bold leading-5">WEEKLY REPORT</p>
              <span>01. Feb - 07. Feb</span>
            </div>
            <div className="flex flex-col text-right">
              <p className="leading-5">Revenue</p>
              <span className="text-base font-semibold leading-5">$ 3621.79</span>
            </div>
          </div>
          <div className="flex flex-col p-2 bg-white rounded">
            <div className="flex flex-row text-gray-500 h-7 text-[10px] justify-end gap-7">
              <div className="flex flex-row items-center gap-2">
                <div className="h-[3px] w-[10px] bg-[#fa7373] rounded"></div>
                Views
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-[3px] w-[10px] bg-[#7ba2ff] rounded"></div>
                Purchases
              </div>
            </div>
            <hr className="mt-2"></hr>
            <div className="relative h-7">
              <svg className="absolute ">
                <polyline className=" fill-none stroke-[#fa7373] stroke-2" points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"></polyline>    
              </svg>
              <svg className="absolute ">
                <polyline className=" fill-none stroke-[#7ba2ff] stroke-2" points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"></polyline>    
              </svg>
            </div>
            <hr className="mt-3"></hr>
            <div className="h-7"></div>
            <hr className="mt-3"></hr>
            <div className="flex flex-row justify-between mt-2 text-[10px] text-gray-400">
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
              <div>SUN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Day5Page
