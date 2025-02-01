import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'

function App() {
  return (
    <div className="App">  
      {/* <ClockDisplay/> */}
      <ActivityFinder/>
    </div>  
  )
}

export default App
