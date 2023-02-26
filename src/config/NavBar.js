import "../App.css"
import { Paper } from '@mui/material'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navbar= () => {
  return (
<Paper elevation={10}   className="Navbar">

    <Nav variant="tabs" defaultActiveKey="/" style={{height:70, alignContent:"center",justifyContent:"center",display:"flex"}}>
    {/* <Nav.Item style={{margin:"2%"}}>
  <Link style={{fontSize:17,marginTop:20,textDecoration:"none"}} to="/">SignIn </Link>
  </Nav.Item> */}
  <Nav.Item style={{margin:"2%"}}>
  <Link style={{fontSize:17,marginTop:10,textDecoration:"none"}} to="/AddManager">Add Manager</Link>
  </Nav.Item>
  <Nav.Item style={{margin:"2%"}}>
  <Link style={{fontSize:17,marginTop:10,textDecoration:"none"}} to="/Request">All Request</Link>
  </Nav.Item>
  <Nav.Item style={{margin:"2%"}}>
  <Link style={{fontSize:17,marginTop:10,textDecoration:"none"}} to="/AcceptedReq">Accepted Request</Link>
  </Nav.Item>
  <Nav.Item style={{margin:"2%"}}>
  <Link style={{fontSize:17,marginTop:10,textDecoration:"none"}} to="/DeclineReq">Decline Request</Link>
  </Nav.Item>
 


</Nav>
</Paper>
  )
}


export default Navbar



// // {/* <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/Cart">Cart</Link>
// //             </li>
// //             <li>
// //               <Link to="/AddProduct">AddProduct</Link>
// //             </li>
// //             <li>
// //               <Link to="/">GetProducts</Link>
// //             </li>
// //           </ul>
// //         </nav>
// //     </div> */}

