import React, { useEffect, useState } from 'react'
import Context from './context'
import dashboardData from '/Data/dashboardData'
const ContextState = (props) => {

  // Function to get data from session storage
  // On first render it will take the default created data
  const getInitialData = () => {
    const storedData = sessionStorage.getItem('dashboardData');
    return storedData ? JSON.parse(storedData) : dashboardData;
  };

  // State to open the widget box
  const [widget, setwidget] = useState(false)

  // Getting data from session storage
  const [data, setdata] = useState(getInitialData())

  // State to set the widget category name
  const [defaultWidget, setdefaultWidget] = useState("CSPM Executive Dashboard")

  // State to search for widgets
  const [searchWidget, setsearchWidget] = useState('')

  // Saving data to session storage on change so that it can render changes even on refresh in current session
  useEffect(() => {
    sessionStorage.setItem('dashboardData', JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Context.Provider value={{ widget, setwidget, defaultWidget, setdefaultWidget, data, setdata, searchWidget, setsearchWidget }}>
        {props.children}
      </Context.Provider>
    </>
  )
}

export default ContextState