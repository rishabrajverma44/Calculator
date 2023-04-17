import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/HomePage"
import CreateUser from "./Components/CreateUsers"
import Users from "./Components/Users"
import Content from "./Calculator"
const App = () => {
  return (
    <div>
//         <BrowserRouter>
//            <Home></Home>
//            <Routes>
//              <Route element={<CreateUser/>} path='/'/>
//              <Route element={<Users/>} path='/users'/>
//            </Routes>
//         </BrowserRouter>
    <Content/>
    </div>
  )
}

export default App
