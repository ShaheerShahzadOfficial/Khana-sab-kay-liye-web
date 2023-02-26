import React from 'react'
import SignIn from '../Auth/SignIn';
import { Routes, Route, Link,BrowserRouter  } from "react-router-dom";
import AddManager from '../Screens/AddManager';
import GetRequest from '../Screens/GetRequest';
import DeclineRequest from '../Screens/DeclineReq';
import AcceptedRequest from '../Screens/AcceptedReq';


function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route exact  path="/"  element={<SignIn/>} />
        <Route  path="/AddManager" element={<AddManager/>} />
        <Route  path="/Request" element={<GetRequest/>} />
        <Route  path="/AcceptedReq" element={<AcceptedRequest/>} />
        <Route  path="/DeclineReq" element={<DeclineRequest/>} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing