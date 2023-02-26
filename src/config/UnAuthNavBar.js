import "../App.css"
import { Paper } from '@mui/material'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const UnAuthNavBar= () => {
  return (
<Paper elevation={10}   className="Navbar">

    <Nav variant="tabs" defaultActiveKey="/" style={{height:70, alignContent:"center",justifyContent:"center",display:"flex"}}>
    <Nav.Item style={{margin:"2%"}}>
  <Link style={{fontSize:17,marginTop:20,textDecoration:"none"}} to="/">SignIn </Link>
  </Nav.Item>
 
</Nav>
</Paper>
  )
}


export default UnAuthNavBar





