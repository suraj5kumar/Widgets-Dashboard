import React, { useContext } from 'react'
// import dashboardData from '/Data/dashboardData'
import { Cancel01Icon } from 'hugeicons-react'
import Context from '../Context/context'
const Categories = () => {
  const { setwidget, data, setdata } = useContext(Context)

  // Function to delete a widget
  const deleteWidget = (categoryIndex, widgetId) => {
    setdata((prevData) => {
      // Create a new categories array with the updated widgets
      const newCategories = prevData.categories.map((category, index) => {
        if (index === categoryIndex) {
          // Filter out the widget to delete
          const newWidgets = category.widgets.filter(widget => widget.id !== widgetId);
          return { ...category, widgets: newWidgets }
        }
        return category;
      })

      return {
        ...prevData,
        categories: newCategories,
      }
    })
  }

  return (
    <>
      <div className=' w-full flex justify-center items-center'>
        <div className=' w-full px-3 flex flex-col gap-5'>
          {/* Mapping different categories */}
          {data.categories.map((category, index) => (
            <div key={index}>
              <h2 className=' font-medium'>{category.name}</h2>

              {/* Mapping widgets of each categories */}
              <div className=' flex gap-5 flex-wrap w-full'>
                {category.widgets.map((widget) => (
                  <div key={widget.id} className=' h-[180px] w-[350px] bg-white px-3 py-2 rounded-xl flex flex-col gap-5'>
                    <div className=' w-full flex justify-between'>
                      <h3>{widget.name}</h3>
                      <Cancel01Icon
                        size={24}
                        color={"#000000"}
                        variant={"stroke"}
                        className=' cursor-pointer hover:opacity-70 duration-200'
                        onClick={() => deleteWidget(index, widget.id)}
                      />
                    </div>
                    <p>{widget.text}</p>
                  </div>
                ))}

                {/* Add Widget */}
                <div className=' w-[350px] h-[180px] bg-white rounded-xl px-3 py-2 flex justify-center items-center'>
                  <div onClick={() => { setwidget(true) }} className=' border border-slate-600 px-3 py-2 rounded-md cursor-pointer text-sm text-slate-600'>
                    + &nbsp; Add Widget
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories