import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Login from "../pages/login";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";
import DashBoard from "../pages/DashBoard";

const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="registration" element={<Registration/>}/>
         <Route path="contact" element={<Contact/>} />
         <Route path="dashboard" element={<DashBoard/>} />
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;