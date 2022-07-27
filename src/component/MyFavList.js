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
import { MdFavoriteBorder } from "react-icons/md";
import styled from "styled-components";

const MyFavList = () => {

  let token = JSON.parse(localStorage.getItem('user'));
  const [data , setData] = useState([]);
  
  

  useEffect (() =>{
    
    axios.get("http://127.0.0.1:8000/profile_app/get_user_fav/",
    {headers:{"Authorization" : `Bearer ${token}`}})
    .then((res)=>{
      setData(res.data.fav)
    }).catch((err)=>{
        console.log(err)
    })
},[]);


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
                onClick={()=>{
                  // setDelet(e.Content.id);
                  // deleteFav();
                }}
              >
                <MdFavoriteBorder size={30} color={"#0b0b25"} />
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