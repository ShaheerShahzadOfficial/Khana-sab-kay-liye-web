import React,{useEffect, useState} from 'react'
import { auth, onAuthStateChanged } from './config/firebaseInit';
import Routing from './config/Routing'
import {Navigate } from "react-router-dom"
function App() {
//   const [CurrentUser, setCurrentUser] = useState(null)
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(user => {
//       setCurrentUser(user)

//     })

//     return unsubscribe
//   }, [])

// if (CurrentUser == null && window.location !== "/") {
//     return  <Navigate to="/" replace />;
// } else {
  
// }

  return (
      <Routing>    
        
      </Routing>
    
  )
}

export default App