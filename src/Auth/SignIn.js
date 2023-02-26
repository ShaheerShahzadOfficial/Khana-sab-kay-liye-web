/* eslint-disable jsx-a11y/alt-text */
import '../App.css';
import React, {  useState } from 'react';
import Logo from "../images/logo.png"
import {auth,signInWithEmailAndPassword}from "../config/firebaseInit"
// import Navbar from '../config/NavBar';
// import UnAuthNavBar from '../config/UnAuthNavBar';
// import { doc, getDoc } from 'firebase/firestore';
import swal from 'sweetalert';
import {  useNavigate } from 'react-router-dom'; 

export default function SignIn () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false)

  const navigate = useNavigate()


  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


  const handleSignUp=async()=>{
if (email !== "" && password !== ""){
  // Email = admin@saylani.com 
  // Password = 12345678
console.log("Email","===>",email,"password","===>",password)

if (email === "admin@saylani.com" && password === "12345678") {
  await signInWithEmailAndPassword(auth, email, password)
  .then( async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.table(user)
    swal("Successful","Sign In Successful","success")
    navigate("/Request")
    // ...
  })
  .catch((error) => {

  });
} else {
  swal("Error","You Are Not Admin","error")
}


}else{
  console.log("Not Found")
}
  }
    return (
      <div>
{/* <UnAuthNavBar/> */}

      <div className="bg">
        <div className="Card">
          
          <div className='CardSubDiv'>
            <img src={Logo} className='img'/>
           
          </div>
          <div className='CardSubDiv'>
            <h1 className='title'>Sign In</h1>
            <div className='inputCon'>
            <i className="fa fa-envelope hoverable inputLeftIcon"></i>
            <input placeholder='Your Email' className='inputField' style={{fontSize:20}}type={"email"} onChange={(event)=>{
              setEmail(event.target.value) 
            }}/>
            </div>
            <div className='inputCon'>
            <i className="fa fa-lock hoverable inputLeftIcon"></i>
            <input placeholder='Your Password' className='inputField' style={{fontSize:20}}  type={passwordShown ? "text" : "password"} onChange={(event)=>{
              setPassword(event.target.value) 
            }}/>
            </div>
            <div className='rememberMe'>
                <input type="checkbox" onChange={togglePassword} />&ensp;Show Password
                </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} id="btnLogin">
              <button className='loginButton hoverable' onClick={handleSignUp}  style={{width:100,backgroundColor:"green",alignItems:"center",justifyItems:"center",border:"2px solid green"}}>Log in</button>
            </div>
             {/* <div className='textDiv optionTextDiv'>
             <h2 className='optionText hoverable'>Or login with </h2><i className="fa fa-facebook-square  hoverable"></i><i className="fa fa-twitter-square hoverable"></i><i className="fa fa-google-plus-square hoverable"></i>
             </div>  */}
          </div>
        </div>
      </div>
      </div>
    )
  }
