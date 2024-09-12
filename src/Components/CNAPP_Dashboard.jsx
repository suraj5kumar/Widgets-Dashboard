import React, { useContext } from 'react'
import { PlusSignIcon, RepeatIcon, Clock01Icon, ArrowDown01Icon } from 'hugeicons-react'
import Context from '../context/context'
import Categories from './Categories'
import Add_widget from './Add_widget'

const CNAPP_Dashboard = () => {
  const widgetOption = useContext(Context)
  return (
    <>
      <div className=' w-full px-5 py-5'>
        <div className=' w-full flex flex-col sm:flex-row gap-2 items-center justify-between pb-5'>
          {/* Heading */}
          <p className=' font-bold'>
            CNAPP Dashboard
          </p>

          {/* Options */}
          <div className=' flex items-center gap-3 flex-wrap justify-center'>
            {/* Add Widget option */}
            <div onClick={() => { widgetOption.setwidget(true) }} className={` border border-slate-400 bg-white rounded-md px-2 py-1 flex items-center gap-2 cursor-pointer`}>
              <p className=' text-sm text-slate-600 whitespace-nowrap'>Add Widget</p>
              <PlusSignIcon
                size={16}
                color={"#475569"}
                variant={"stroke"}
              />
            </div>


            {/* Refresh Button */}
            <div className=' flex border px-1 py-1.5 bg-white border-slate-400 rounded-md cursor-pointer'>
              <RepeatIcon
                size={16}
                color={"#475569"}
                variant={"stroke"}
              />
            </div>


            {/* More Options Button */}
            <div className=' flex flex-col gap-0 bg-white px-2 py-1.5 border border-slate-400 rounded-md cursor-pointer'>
              <img src="/Images/More options.png" alt="" className=' h-4' />
            </div>


            {/* Day Selection */}
            <div className=' flex items-center border border-blue-800 py-1 px-2 gap-2 cursor-pointer rounded-md'>
              <div className=' border-r border-blue-800 pr-1'>
                <Clock01Icon
                  size={16}
                  color={"#1e3a8a"}
                  variant={"stroke"}
                />
              </div>
              <span className=' text-sm text-blue-900 whitespace-nowrap'>
                Last 2 Days
              </span>
              <span>
                <ArrowDown01Icon
                  size={16}
                  color={"#1e3a8a"}
                  variant={"stroke"}
                />
              </span>
            </div>
          </div>
        </div>

        <Categories />

        {
          widgetOption.widget && <Add_widget />
        }
      </div>
    </>
  )
}

export default CNAPP_Dashboard