import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/ContextFile';

const WidgetForm = () => {
  // State of default widget category name
  const { setdata, defaultWidget } = useContext(Context);

  const [widgetName, setwidgetName] = useState('');
  const [widgetText, setwidgetText] = useState('');

  // function to add new widget
  const addNewWidget = (widgetName, widgetText) => {
    setdata((prevdata) => {
      return {
        ...prevdata,
        categories: prevdata.categories.map((category) => {
          if ((widgetName && widgetText) && (category.name === defaultWidget.name)) {
            return {
              ...category,
              widgets: [
                ...category.widgets,
                { id: Date.now(), name: widgetName, text: widgetText }
              ]
            }
          }
          else {
            return category
          }
        })
      }
    })
  };


  const handleWidget = (e) => {
    e.preventDefault()
    addNewWidget(widgetName, widgetText)
    setwidgetName('')
    setwidgetText('')
  };

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        <form method='POST' onSubmit={handleWidget} className='w-full h-full flex flex-col px-5 py-3'>
          <div className='w-full flex flex-col gap-3'>
            <h1>Enter details to add a new widget</h1>
            <div className='flex flex-col'>
              <label htmlFor="">Widget Name</label>
              <input
                type="text"
                name='widgetName'
                onChange={(e) => { setwidgetName(e.target.value) }}
                className='border border-slate-500 rounded-md focus:outline-none px-3 py-1'
                placeholder='Enter Widget Name'
                value={widgetName}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Widget text</label>
              <input
                type="text"
                name='widgetText'
                onChange={(e) => { setwidgetText(e.target.value) }}
                className='border border-slate-500 rounded-md focus:outline-none px-3 py-1'
                placeholder='Enter widget text'
                value={widgetText}
              />
            </div>
          </div>
          <div className='w-full h-10 flex justify-center px-5 pt-2 gap-3'>
            <button type='submit' className='border border-slate-400 px-3 py-1 rounded-md hover:bg-blue-500 duration-300 hover:text-white'>Add Widget</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default WidgetForm;
