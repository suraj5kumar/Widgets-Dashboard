import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/ContextFile';
import WidgetForm from './WidgetForm';

const WidgetPersonalization = () => {
  // State to open the widget box
  const { setwidget, setdefaultWidget, data, setdata } = useContext(Context);

  const [categoryName, setcategoryName] = useState(0);

  // State to manage the visibility of widgets
  const [visibleWidgets, setVisibleWidgets] = useState({});

  // Use effect to set the default widget category index so that data should added to that particular category
  useEffect(() => {
    setdefaultWidget(data.categories[categoryName]);

    // Initialize visibility state for the selected category if not already done
    setVisibleWidgets((prev) => ({
      ...prev,
      [data.categories[categoryName].name]: Array(data.categories[categoryName].widgets.length).fill(true),
    }));
  }, [categoryName]);

  // Function to handle checkbox change
  const onCheckboxChange = (index, checked) => {
    const category = data.categories[categoryName].name;

    // Update visibility state
    setVisibleWidgets((prev) => ({
      ...prev,
      [category]: prev[category].map((item, idx) => (idx === index ? checked : item)),
    }));

    // Update data state to remove widget if unchecked
    if (!checked) {
      setdata((prevData) => {
        const updatedCategories = prevData.categories.map((cat, catIndex) => {
          if (catIndex === categoryName) {
            return {
              ...cat,
              widgets: cat.widgets.filter((_, widgetIndex) => widgetIndex !== index),
            };
          }
          return cat;
        });

        return { ...prevData, categories: updatedCategories };
      });
    }
  };

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full h-full flex flex-col justify-between'>
          <div>
            {/* Heading */}
            <h1 className='px-5'>Personalize your dashboard by adding the following widget</h1>
            {/* Categories Name */}
            <div className='flex flex-wrap items-center h-10 px-2'>
              {data.categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setcategoryName(index)}
                  className={`flex flex-col items-center justify-center px-2 cursor-pointer border-b-2 ${categoryName === index ? 'border-b-slate-800' : 'border-b-2'
                    }`}
                >
                  <h1 className='text-blue-700'>{category.name.split(' ')[0]}</h1>
                </div>
              ))}
            </div>

            {/* Widget */}
            <div className='w-full flex flex-col px-5 gap-2'>
              {data.categories[categoryName].widgets.map((widget, index) => (
                <div key={index} className='w-full flex flex-col'>
                  <div className='flex gap-2 border border-slate-400 px-2 py-1 rounded-sm text-blue-700'>
                    <input
                      type="checkbox"
                      checked={true}
                      onChange={(e) => onCheckboxChange(index, e.target.checked)}
                    />
                    <label>{widget.name}</label>
                  </div>
                </div>
              ))}
            </div>

            {/* Widget form */}
            <WidgetForm />
          </div>
          {/* Cancel and Submit */}
          <div className='w-full h-10 flex justify-end px-5 pt-2 gap-3'>
            <button
              onClick={() => {
                setwidget(false);
              }}
              className='border border-slate-400 px-3 py-1 rounded-md hover:bg-blue-500 duration-300 hover:text-white'
            >
              Cancel
            </button>
            <button onClick={() => {
              setwidget(false);
            }} className='border border-slate-400 px-3 py-1 rounded-md hover:bg-blue-500 duration-300 hover:text-white'>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetPersonalization;
