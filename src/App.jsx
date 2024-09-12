import React from 'react'
import Top_navbar from './Components/Top_navbar'
import CNAPP_Dashboard from './Components/CNAPP_Dashboard'
import ContextState from './Context/ContextState'

const App = () => {
  return (
    <>
      <ContextState>

        <Top_navbar />
        <CNAPP_Dashboard />

      </ContextState>
    </>
  )
}

export default App