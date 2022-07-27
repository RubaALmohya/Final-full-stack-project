import { useSpring, animated, config } from "react-spring";
import Calender from ".././Calender";
import {BsFillSquareFill} from 'react-icons/bs';
import RateImg from "../../images/rating.png";
import UserIcon from "../../images/user (3).png";
import styled from 'styled-components';
import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";


const Container = styled(animated.div)`
font-family: 'M PLUS Rounded 1c', sans-serif;
  display: inline-block;
  /* padding: 3em; */
  width:70%;
  background: #264871;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  text-align: center;
`;
const Note = styled.p`
padding-top: 10px;
color: #a6a6a6;
font-size: 10px;
text-align: center;

`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  padding: 10px;
  /* border: 2px solid #000;
  border-radius: 50%; */
`;

const StyledH1 = styled.h1`
  line-height: 1.5;
  letter-spacing: 1.5;
  color: white;
  font-family: 'M PLUS Rounded 1c', sans-serif;
`;

const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.15;
  color: white;
  font-family: "Gilroy";
  font-size: 20px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const MainBg = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0b0b25;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProfilePage() {


    let token = JSON.parse(localStorage.getItem('user'));

    const [data , setData] = useState([]);
    const [dataimage , setDataimage] = useState([]);
    const [avg , setAVG] = useState([])
    // const [mood , setMood] = useState([]);
    // const [datemood , setDatemood] = useState([]);
    
    
    useEffect (() =>{
        axios.get("http://127.0.0.1:8000/profile_app/get_user_info/",
        {headers:{"Authorization" : `Bearer ${token}`}})
        .then((res)=>{
        //  console.log(res.data.info.username);
          setData(res.data.info)
          setDataimage(res.data.pic.pic)
         
        }).catch((err)=>{
            console.log(err)
        })
    },[]);

    

    useEffect (() =>{
    axios.get("http://127.0.0.1:8000/profile_app/get_user_rating_avg/",
    {headers:{"Authorization" : `Bearer ${token}`}})
    .then((res)=>{
       
    console.log("res.data.AVG");
    console.log(res.data.AVG);
    setAVG(res.data.AVG)
    }).catch((err)=>{
        console.log(err)
        })
    },[]);

    

    // useEffect (() =>{
    //     axios.get("http://127.0.0.1:8000/mood_app/user_moods/",
    //     {headers:{"Authorization" : `Bearer ${token}`}})
    //     .then((res)=>{
    //      console.log(res.data.user_moods);
    //      console.log(res.data.user_moods_date);
    //      setMood(res.data.user_moods)
    //      setDatemood(res.data.user_moods_date)
         
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // },[]);
    //  console.log(data)
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
  return (
    
    <MainBg>        
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
{/* 
            <StyledImg src={dataimage} /> */}

            <StyledImg src={UserIcon} />

            <StyledH1>{data.username}</StyledH1>
             <p style={{color: "white"}}>  <img src={RateImg}/> Level of Satisfaction: {avg}</p> 
            <Calender></Calender>
            <Note>Note: on a certain date colors will be shown based on your emotion. <br/> ( <BsFillSquareFill color={'#898a88'}/> Sad , <BsFillSquareFill color={'white'}/>  Neutral, <BsFillSquareFill color={'#ffe347'}/> Happy, <BsFillSquareFill color={'#b04bdb'}/> Fear, <BsFillSquareFill color={'#915a2a'}/> Disgust, <BsFillSquareFill color={'#db4b4b'}/> Angry, <BsFillSquareFill color={'#46cfd4'}/> Surprised).</Note>
        </Container>
        <br></br>
    </MainBg>
  );
}
