import React, { useState } from 'react';
import axios from "axios";
import { useEffect, useParams } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { BsFillArchiveFill } from "react-icons/bs";
import styled from "styled-components";

const MyFavList = () => {

  let token = JSON.parse(localStorage.getItem('user'));
  const [data , setData] = useState([]);
  const [delets , setDelet] = useState([]);
  const [id_content, setId_content] = useState('')
  

  useEffect (() =>{
    
    axios.get("http://127.0.0.1:8000/profile_app/get_user_fav/",
    {headers:{"Authorization" : `Bearer ${token}`}})
    .then((res)=>{
      // console.log(res.data.fav)

      // console.log(res.data.fav)
      setData(res.data.fav)
      setId_content(res.data.fav.Content.id)
      
      
    }).catch((err)=>{
        console.log(err)
    })
},[]);



// const deleteFav= () => {
//   axios
//     .delete(`http://127.0.0.1:8000/profile_app/delete_uers_fav/${delets}/`)
//     .then((res) => {
//       setDelet(res.data.fav);
      
      
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


const deleteFav = (e) =>{
  console.log('**');
  console.log(e)
  let id = e.toString();
  
  const url =`http://127.0.0.1:8000/profile_app/delete_uers_fav/${id}`;
  axios.delete(url,
  {headers:{"Authorization" : `Bearer ${token}`}})
.then((res)=>{
}).catch((err)=>{
    console.log(err)
})

};

  return (
    <>
      <MDBRow
        className="row-cols-1 row-cols-md-3 g-4"
        style={{ marginLeft: "5px", marginRight: "5px" }}
      >
        {data.map((e)=>{
              return (
        <MDBCol sm="6">
        
          <MDBCard>
            <MDBCardBody>
            <img
              src={e.Content.img}
              className="img-thumbnail"
              alt="..."
              style={{ maxWidth: "10rem" }}
            />
             
              <MDBCardTitle>{e.Content.description}</MDBCardTitle>
              <MDBCardText>
              {e.date}
              </MDBCardText>
              <MDBBtn
                className="text-dark"
                color="light"
                style={{ width: "120px" }}
                onClick={deleteFav(e.Content.id)}
                // {()=>{
                //   setDelet(e.Content.id);
                //   deleteFav();
                // }}
              >


                <BsFillArchiveFill size={30} color={"#0b0b25"} />
              </MDBBtn>

              
            </MDBCardBody>
          </MDBCard>
         
        </MDBCol>
        ) })}
      </MDBRow>
    </>
  );
};

export default MyFavList;