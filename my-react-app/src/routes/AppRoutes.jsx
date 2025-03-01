// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import BitcoinRates from "../components/BitcoinRates";
import LoginForm from "../components/loginform";
// import LoginForm from "../components/loginform";

// function AppRoutes(props) {

//     return (
//     <Routes>
//     {/* index matches on default/home URL: / */}
//     <Route index element={<Homepage {...props} />} />
    
//         {/* nested routes, matches on /dash/tasks etc */}
//     <Route path="dash" element={<DashboardPage {...props} />}>
//         <Route path="messages" element={<DashboardMessages />} />
//         <Route path="tasks" element={<DashboardTasks />} />
//     </Route>
    
//     <Route path='/about' element={<AboutPage {...props} />} />
    
//     {/* special route to handle if none of the above match */}
//     <Route path="*" element={<PageNotFound />} />
//     </Routes>
//     )
//     }
    
//     export default AppRoutes;
//     // Name this file AppRoutes.jsx and store in new folder 'routes'


// Lab #4

function AppRoutes(props) {

    return (
    <Routes>
    {/* index matches on default/home URL: / */}
    <Route index element={<Homepage {...props} />} />
    
    <Route path="login" element={<LoginForm {...props}/>} />

    <Route path="bitcoin"></Route>
    
    <Route path='/about' element={<AboutPage {...props} />} />
    
    {/* special route to handle if none of the above match */}
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    )
    }
    
    export default AppRoutes;
    // Name this file AppRoutes.jsx and store in new folder 'routes'