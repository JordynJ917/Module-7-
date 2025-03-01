// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import AppRoutes from './routes/AppRoutes'
// import NavBar from './components/NavBar'
// import { UserProvider } from './context/UserContext'
// import { ThemeProvider } from "@emotion/react";

// import BtcNavBar from './components/BtcNavBar'

import { ThemeProvider } from "@emotion/react";
import "./App.css";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import { purpleTheme } from "./themes/purpleTheme";

function App() {
  return (
    <div className="App">
      <UserProvider> 
      <ThemeProvider>
      <NavBar/>
      <AppRoutes/>
      </ThemeProvider>
      </UserProvider>
    </div>  
  )
}

export default App


// //import ClockDisplay from './components/Clock'
// import ActivityFinder from './components/ActivityFinder'
// import BitcoinRates from './components/BitcoinRates'
// import RefCounter from './components/refCounter'
// import VideoPlayer from './components/VideoPlayer'
// import ReducerCounter from './components/reducerCounter'
// import PostListReducer from './components/PostListReducer'
// import SubscribeForm from './components/SubscribeForm'

// //import LoginForm from './components/loginform'
// import MyThemeProvider from './context/MyThemeProvider'
// import Emoji from './components/Emoji'
// import { EmojiProvider } from './context/EmojiContext'

// {/* <ClockDisplay/> */}
//       {/* <ActivityFinder/> */}
//       {/* <BitcoinRates/> */}
//       {/* <RefCounter/>  */}
//       {/* <VideoPlayer/> */}
//       {/* <ReducerCounter/> */}
//       {/* <PostListReducer/> */}
//       {/* <SubscribeForm/> */}
//       {/* <LoginForm/> */}
//       {/* <EmojiProvider>
//         <Emoji/>
//         <BitcoinRates/>
//       </EmojiProvider> */}