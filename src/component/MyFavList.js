import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
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
  const [favImage , setFavImage] = useState([]);
  const [favdate , setFavdate] = useState([]);
  
  

  useEffect (() =>{
    axios.get("http://127.0.0.1:8000/profile_app/get_user_fav/",
    {headers:{"Authorization" : `Bearer ${token}`}})
    .then((res)=>{
      // console.log(res.data.fav)

      console.log(res.data.fav)
      setData(res.data.fav)
      
      
      // setData(res.data.fav[1].Content.img)
      // setFavdate(res.data.fav[1].date)
      
      // console.log(res.data.fav)
      // setData(res.data.fav)
      // console.log(data)
      
  

      // setFavImage(res.data.fav[0].Content.img)
      // console.log(favImage)
      // setFavdate(res.data.fav[0].date)
      // console.log(favdate)

    
     
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