// import React from 'react'
// import { Navigate } from 'react-router-dom';
// import { auth, onAuthStateChanged } from '../config/firebaseInit';

// function onAuth() {
//     const AuthArray=["/AddManager","/Request","/AcceptedReq","/DeclineReq"]
//     // const UnAuthArray=["/"]
//   onAuthStateChanged(auth, (user) => {
//     if (!user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       // ...
//       return <Navigate to="/" replace />;
//     } else {
//               console.log(user.uid)
//               return(
//               <Navigate to={"/AddManager"} replace />
//               )
//      }
//   });
// }

// export default onAuth
