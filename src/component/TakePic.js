import React from 'react';
import Img from '../images/screen.png';
import styled from "styled-components";
import { useEffect } from "react";
import axios from 'axios'



function TakePic() {
  let token = JSON.parse(localStorage.getItem('user'));
  const take= ()=>{
    axios.get("http://127.0.0.1:8000/mood_app/take_photo/",
    )
       .then((res)=>{
   
         console.log(res.data)
         // setData(res.data.fav)
   
       }).catch((err)=>{
           console.log(err)
       })
    emotionAnal()
  }
  const emotionAnal = ()=>{
    axios.get("http://127.0.0.1:8000/mood_app/mood_prediction/",
    {headers:{"Authorization" : `Bearer ${token}`}}
    )
       .then((res)=>{
   
         console.log(res.data)
         // setData(res.data.fav)
   
       }).catch((err)=>{
           console.log(err)
       })
  }

  useEffect (() =>{
   
},[]);
  return (
    <div>
      <button onClick={take}> <Imag src={Img}/></button>
       
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
transition: 0.3s;
&:active{
width: 115px;
}`
