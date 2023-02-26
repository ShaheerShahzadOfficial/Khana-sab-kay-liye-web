import { doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React,{useEffect, useState} from 'react'
import {auth, collection,db} from "../config/firebaseInit"
import Navbar from '../config/NavBar';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function GetRequest() {
    const [Request, setRequest] = useState([])
    const Navigate = useNavigate()
    useEffect( () => {

      const fetch = async ()=>{
        const ReqRef= query(collection(db, "UsersRequest"), where("Status", "==", "Pending"));

        // const dishRef = collection(db, 'UsersRequest');
        let allReq = await getDocs(ReqRef);
        let RequestClone = [];
        allReq.forEach((doc) => {
            // console.table(doc.data(),"Data");
            RequestClone.push(doc.data())
        });
      setRequest(RequestClone)
      console.table(Request);
      }
      fetch()
      
    }, [Request])
    
const handleSignOut=()=>{
  signOut(auth).then(() => {

    console.log("SignOut")
Navigate("/")
  }).catch((error) => {
    // An error happened.
  });
}


    async   function acceptRequest  (index)  {
      const key = Request[index]
      console.log(key.User);
      ///create db collection with doc id///
      const dbRef = doc(db, "UsersRequest", key.User);
      await updateDoc(dbRef, {
        Status: "Accept",
      })
        .then((res) => {
          console.log("Update Successfull");
          Request.splice(index, 1);
          setRequest(Request);
          swal("Created", "Request Accepted", "success");
        })
        .catch((err) => console.log(err));
    };


    const rejectRequest = async (indeNum) => {
      const key = Request[indeNum];
      console.log(key.User,"=====>","Key");
      ///create db collection with doc id///
      const dbRef = doc(db, "UsersRequest", key.User);
      await updateDoc(dbRef, {
        Status: "Rejected",
      })
        .then((res) => {
          console.log("Update Successfull");
          Request.splice(indeNum, 1);
          setRequest(Request);

          swal("Created", "Request Rejected", "success");
        })
        .catch((err) => console.log(err));
    };






  return (
    <div>
        <Navbar/>
        <div>
        {/* <tr> */}
        <table style={{borderCollapse:"collapse",borderSpacing:8,margin:"60px auto"}}>
        <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>Number</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>Name</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>FatherName</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>Status</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>Income</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>CNIC Number</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>FamilyMember</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>RationType</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>Front Pic</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>BackPic</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>Edit</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>Delete</p></th>


<tbody>

            {Request.map(({Name,FatherName,Income,CNIC,FamilyMember,RationType,FrontPic,BackPic,Status},Index)=>(                 
                     <tr key={Index}>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{Index+1}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{Name}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{FatherName}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{Status}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{Income}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{CNIC}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{FamilyMember}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><p style={{textAlign:"center"}}>{RationType}</p></th>
                      <th style={{border:"2px solid green",padding:4}}><img src={FrontPic} alt="Front Pic Of CNIC" width={80} /></th>
                      <th style={{border:"2px solid green",padding:4}}><img src={BackPic} alt="  Back Pic Of CNIC" width={80}/></th>
                      <th style={{border:"2px solid green",padding:4}}><Button variant='success'style={{margin:10}} onClick={() => {
                            acceptRequest(Index);
                          }}>Accept</Button></th>
                      <th style={{border:"2px solid green",padding:4}}><Button variant='danger'style={{margin:10}}         onClick={() => {
                            rejectRequest(Index);
                          }}>Delete</Button></th>
                      </tr>
                      ))} 
                      </tbody>
                      </table>
                      <Button className="w-100" type="submit" onClick={handleSignOut}>
                         SignOut           
                       </Button>
        </div>
    </div>
  )
}

export default GetRequest