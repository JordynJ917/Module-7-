import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import BitcoinRates from './components/BitcoinRates'
import RefCounter from './components/refCounter'
import VideoPlayer from './components/VideoPlayer'
import ReducerCounter from './components/reducerCounter'
import PostListReducer from './components/PostListReducer'
import SubscribeForm from './components/SubscribeForm'

function App() {
  return (
    <div className="App">  
      {/* <ClockDisplay/> */}
      {/* <ActivityFinder/> */}
      <BitcoinRates/>
      {/* <RefCounter/>  */}
      {/* <VideoPlayer/> */}
      {/* <ReducerCounter/> */}
      {/* <PostListReducer/> */}
      {/* <SubscribeForm/> */}
    </div>  
  )
}

export default App
