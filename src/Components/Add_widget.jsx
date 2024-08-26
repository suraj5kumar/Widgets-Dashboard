import React, { useContext, useEffect, useState } from 'react'
import { MultiplicationSignIcon } from 'hugeicons-react'
import Context from '../Context/context'
import WidgetPersonalization from './WidgetPersonalization'
import SearchWidget from './SearchWidget'
const Add_widget = () => {
  // State to open the widget box
  const { setwidget, data, searchWidget, setsearchWidget } = useContext(Context)

  return (
    <>
      <div className=' absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className=' flex w-full h-full justify-end xl:justify-between fixed top-0 left-0'>
          {/* Left side empty partial transparent div */}
          <div onClick={() => { setwidget(false) }} className=' hidden sm:block sm:w-1/4 lg:w-1/2 h-full bg-slate-700 opacity-50'></div>

          {/* Widget section */}
          <div className=' h-full w-full sm:w-3/4 lg:w-2/4 bg-white flex flex-col justify-between'>

            <div className=' w-full h-full flex flex-col'>
              {/* Navbar */}
              <div className=' w-full h-10 bg-blue-800 flex justify-between items-center px-5'>
                <h1 className=' text-white'>Add Widget</h1>
                <MultiplicationSignIcon
                  size={24}
                  color={"#ffffff"}
                  variant={"stroke"}
                  className=' cursor-pointer hover:opacity-70 duration-200'
                  onClick={() => { setwidget(false) }}
                />
              </div>

              {/* Widget section */}
              <div className=' w-full h-full flex flex-col py-5 gap-2'>
                {/* search box to search for widget */}
                <div className=' flex items-center gap-5 px-5 h-10'>
                  <input type="text" value={searchWidget} onChange={(e) => { setsearchWidget(e.target.value) }} className=' w-full border border-slate-600 px-2 py-1 rounded-md focus:outline-none' placeholder='Search for widget...' />
                </div>

                <div className=' w-full h-full'>
                  {
                    searchWidget ? <SearchWidget /> :
                      <WidgetPersonalization />
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Add_widget