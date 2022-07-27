import React from 'react';
import Img from '../images/screen.png';
import styled from "styled-components";
import { useEffect } from "react";

function TakePic() {
  useEffect (() =>{
    axios.get("http://127.0.0.1:8000/mood_app/take_photo/",
    {headers:{"Authorization" : `Bearer ${token}`}})
    .then((res)=>{

      console.log(res.data)
      // setData(res.data.fav)

    }).catch((err)=>{
        console.log(err)
    })
},[]);
  return (
    <div>
        <Imag src={Img}/>
    </div>
  )
}

export default TakePic;

const Imag = styled.img`
position: fixed;
width: 100px;
float: left;
z-index: 9;
margin-left: 100px;
margin-top: 100px;
`
