// import React from 'react'
// import Navbar from '../config/NavBar'

// function AddManager() {
//   return (
//     <div>
//        <Navbar/>
//         AddManager
//     </div>
//   )
// }

// export default AddManager

import '../App.css';
import React, { useState } from 'react';
import Logo from "../images/logo.png"
import {auth,signInWithEmailAndPassword,createUserWithEmailAndPassword, db}from "../config/firebaseInit"
import Navbar from '../config/NavBar';
import { doc, setDoc } from 'firebase/firestore';
import swal from 'sweetalert';


export default function AddManager () {
    const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
const [passwordShown, setPasswordShown] = useState(false)


  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };



  const handleSignUp=()=>{
if (userName !== "" && email !== "" && password !== ""){
  swal("Success","Adding Managers","success")
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
    if (reg.test(email) === true) {
        if (pass.test(password)=== true) {
            console.log("Email","===>",email,"password","===>",password)
            createUserWithEmailAndPassword(auth, email, password)
            
            .then( async function (userCredential) {
                let user=userCredential.user
               let userInfo = {
                 Name:userName,
                 Email:user.email,
                 Uid:user.uid,
                 Type:"Manager"
               }
               await setDoc(doc(db, "Users",user.uid), userInfo)
               .then(
                 async()=>{
                   swal("Success","Successfully Registered","success");
                  
                 }
               ).catch(
                 function(error){
                    console.error(error)
                 }
               )
            
               
              
               })
               .catch(function (error) {
                console.error(error)
            
               });
        }else{
            swal("Error","Password must be between 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character","error")
        }
    }else{
      swal("Error","Email is not correct","error")
    }

}else{
  swal("Error","Fill All The Field !","error")
}
  }
    return (
      <div>
<Navbar/>

      <div className="bg">
        <div className="Card">
          
          <div className='CardSubDiv'>
            <img src={Logo} className='img' width={250} />
           
          </div>
          <div className='CardSubDiv'>
            <h1 className='title'> Add New Manager </h1>
            <div className='inputCon'>
            <i className="fa fa-user hoverable inputLeftIcon"></i>
            <input placeholder='Managers Name' className='inputField' style={{fontSize:20}}type={"text"} onChange={(event)=>{
              setUserName(event.target.value) 
            }}/>
            </div>
            <div className='inputCon'>
            <i className="fa fa-envelope hoverable inputLeftIcon"></i>
            <input placeholder='Managers Email' className='inputField' style={{fontSize:20}}type={"email"} onChange={(event)=>{
              setEmail(event.target.value) 
            }}/>
            </div>

                  
                    <div className='inputCon'>
                    <i className="fa fa-key hoverable inputLeftIcon"></i>
                    <input placeholder='Managers Password' className='inputField' style={{fontSize:20}} type={passwordShown ? "text" : "password"} onChange={(event)=>{
                      setPassword(event.target.value) 
                    }}/>
                    </div>       
            
<div className='rememberMe'>
                <input type="checkbox" onChange={togglePassword} />&ensp;Show Password
                </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
