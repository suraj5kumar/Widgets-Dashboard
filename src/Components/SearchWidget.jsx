import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/context'
const SearchWidget = () => {
  const { searchWidget, setsearchWidget, data } = useContext(Context)
  const [presentWidget, setpresentWidget] = useState([])

  useEffect(() => {
    // Creating a temporary array to hold unique widgets
    const tempWidgets = []

    data.categories.forEach((item) => {
      item.widgets.forEach((widget) => {
        // Searching if any of the widget include any of the search words
        if (widget.name.toLowerCase().includes(searchWidget.toLowerCase())) {
          if (!tempWidgets.some((w) => { w.id === widget.id })) {
            tempWidgets.push(widget)
          }
        }
      })
    })
    setpresentWidget(tempWidgets)
  }, [searchWidget])

  return (
    <>
      <div className=' w-full flex items-center justify-center'>
        <div className=' w-full flex flex-col items-center px-5 py-3 gap-1'>
          {
            presentWidget.map((item) => {
              return (
                <div key={item.id} onClick={(e) => { setsearchWidget(e.target.innerText) }} className=' cursor-pointer w-full h-10 bg-[#e2f2fa] border border-[#94a3b8] rounded-md px-3 items-center flex justify-between'>
                  <p className=' text-sm'>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default SearchWidget