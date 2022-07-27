import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import { MdFavorite } from "react-icons/md";
import styled from "styled-components";
import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import RateComponent from "./Rate";

let isClicked = false;

const ShowContent = () => {

  let token = JSON.parse(localStorage.getItem('user'));
  const [data , setData] = useState([]);

 const next = () => {
  axios.get("http://127.0.0.1:8000/mood_app/display_content/",
  {headers:{"Authorization" : `Bearer ${token}`}})
  .then((res)=>{
    console.log(res.data)
    setData(res.data.content)
    console.log(data)  
  }).catch((err)=>{
      console.log(err)
  })
  };

  const addFav = () =>{


  };

  useEffect (() =>{
    next()
},[]);

  return (
    <>
      <MDBRow className="justify-content-md-center">
        <MDBCol>
          <img
            src={data.img}
            className="img-thumbnail"
            alt="..."
            style={{ maxWidth: "24rem" }}
          />
          <p>{data.description}</p>
          <MDBCol style={{ paddingTop: "50px" }}>
            <MDBBtn
              className="text-dark"
              color="light"
              style={{ fontSize: "20px", width: "120px" }}
             onClick={next}
            >
              Next
            </MDBBtn>

            <MDBBtn
              className="text-dark"
              color="light"
              style={{ marginLeft: "50px", width: "120px" }}
              
            >
              <MdFavorite size={30} color={"#0b0b25"} />
            </MDBBtn>
            <RateComponent></RateComponent>
          </MDBCol>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default ShowContent;
