import { doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React,{useEffect, useState} from 'react'
import {collection,db} from "../config/firebaseInit"
import Navbar from '../config/NavBar';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
function AcceptedRequest() {
    const [Request, setRequest] = useState([])
    useEffect( () => {

      const fetch = async ()=>{
        const ReqRef= query(collection(db, "UsersRequest"), where("Status", "==", "Accept"));

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
    
    // async   function acceptRequest  (index)  {
    //   const key = Request[index]
    //   console.log(key);
    //   ///create db collection with doc id///
    //   const dbRef = doc(db, "UsersRequest", key);
    //   await updateDoc(dbRef, {
    //     Status: "Accept",
    //   })
    //     .then((res) => {
    //       console.log("UPdated Successfull");
    //       Request.splice(index, 1);
    //       setRequest(Request);
    //       swal("Created", "Request Accepted", "success");
    //     })
    //     .catch((err) => console.log(err));
    // };

  return (
    <div>
        <Navbar/>
        <div>
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
                      <th style={{border:"2px solid green",padding:4}}><img src={FrontPic} alt="Front Pic Of CNIC" width={120} /></th>
                      <th style={{border:"2px solid green",padding:4}}><img src={BackPic} alt="  Back Pic Of CNIC" width={120}/></th>

                      </tr>
                      ))} 
                      </tbody>
                      </table> 
        </div>
    </div>
  )
}

export default AcceptedRequest