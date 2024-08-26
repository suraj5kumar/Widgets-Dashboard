import React, { useEffect, useState } from 'react'
import { Search01Icon, ArrowDown01Icon, Notification03Icon, UserCircle02Icon } from 'hugeicons-react'

const Top_navbar = () => {
  const [ham, setham] = useState(false)

  return (
    <>
      <div className=' w-full h-8 bg-[#ffffff] flex items-center px-5 justify-between'>
        <div className=' w-full h-8 bg-[#ffffff] flex flex-row-reverse lg:flex-row items-center justify-between'>
          {/* Path guide */}
          <div>
            <a href='#' className=' text-slate-500 text-sm'>Home &gt; </a>
            <a href='#' className=' text-blue-700 font-bold text-sm'>Dashboard V2</a>
          </div>

          {/* Utility and User Details Navbar for large screens */}
          <div className=' hidden lg:flex items-center'>
            <div className=' flex bg-[#e2f2fa] h-6 w-96 border border-[#94a3b8] gap-3 rounded-md px-3 items-center'>
              <Search01Icon
                size={18}
                color={"#73748b"}
                variant={"stroke"}
              />
              <input type="text" className=' w-full h-4 focus:outline-none bg-[#e2f2fa] placeholder:text-sm text-sm' placeholder='Search anything...' />
            </div>

            {/* Notification and User */}
            <div className=' flex items-center gap-5 px-5'>
              <div className=' flex'>
                <ArrowDown01Icon
                  size={18}
                  color={"#73748b"}
                  variant={"stroke"}
                  className=' ml-3 cursor-pointer'
                />

                <Notification03Icon
                  size={18}
                  color={"#73748b"}
                  variant={"stroke"}
                  className=' ml-3 cursor-pointer'
                />
              </div>
              {/* User details */}
              <div className=' flex items-center cursor-pointer gap-1'>
                <UserCircle02Icon
                  size={24}
                  color={"#000000"}
                  variant={"stroke"}
                />
                <p>John Doe</p>
              </div>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className=' flex flex-col gap-1 cursor-pointer lg:hidden' onClick={() => setham(!ham)}>
            <div className=' h-1 w-10 bg-slate-400 rounded-full'></div>
            <div className=' h-1 w-10 bg-slate-400 rounded-full'></div>
            <div className=' h-1 w-10 bg-slate-400 rounded-full'></div>
          </div>

          {/* Utility and User details navbar for small screens */}
          <div className={` flex flex-col items-center absolute h-full gap-5 top-8 bg-white ${ham ? "left-0" : "-left-full"} -left-full px-5 py-5 duration-500 lg:hidden`}>

            {/* Search box */}
            <div className=' flex bg-[#e2f2fa] h-6 w-60 border border-[#94a3b8] gap-3 rounded-md px-3 items-center'>
              <Search01Icon
                size={18}
                color={"#73748b"}
                variant={"stroke"}
              />
              <input type="text" className=' w-40 h-4 focus:outline-none bg-[#e2f2fa] placeholder:text-sm text-sm' placeholder='Search anything...' />
            </div>

            {/* Notification and User */}
            <div className=' flex flex-col items-center gap-5 px-5'>
              <div className=' flex gap-5'>
                <ArrowDown01Icon
                  size={18}
                  color={"#73748b"}
                  variant={"stroke"}
                  className=' ml-3 cursor-pointer'
                />

                <Notification03Icon
                  size={18}
                  color={"#73748b"}
                  variant={"stroke"}
                  className=' ml-3 cursor-pointer'
                />
              </div>
              {/* User details */}
              <div className=' flex items-center cursor-pointer gap-1'>
                <UserCircle02Icon
                  size={24}
                  color={"#000000"}
                  variant={"stroke"}
                />
                <p>John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top_navbar