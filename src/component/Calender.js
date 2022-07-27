import {BsFillSquareFill} from 'react-icons/bs';
import styled from "styled-components";
import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
// Example of a data array that
// you might receive from an API


  
    
  function App() {
    let token = JSON.parse(localStorage.getItem('user'));
    const [mood , setMood] = useState([]);
    const [datemood , setDatemood] = useState([]);
    const [emotionColor , setEmotionColor] = useState([])

  useEffect (() =>{
    axios.get("http://127.0.0.1:8000/mood_app/user_moods/",
    {headers:{"Authorization" : `Bearer ${token}`}})
    .then((res)=>{
     console.log(res.data.emotion_name);
     console.log(res.data.user_moods_date);
     console.log(res.data.emotion_color);
     setMood(res.data.emotion_name)
     setDatemood(res.data.user_moods_date)
     setEmotionColor(res.data.emotion_color)

    //  console.log(emotionColor[0])
     
    }).catch((err)=>{
        console.log(err)
    })
},[]);
    return (
      <div>
        <Table>
          <tr className='center'>
            <th className='dateHeader'>Date</th>
            <th className='emotion'> Emotion </th>
            </tr>
          {mood.map((val, key) => {
            return (

              <tr className='center' key={key}>
                <td>{datemood[key]}</td>
                <td className='emotion'> <BsFillSquareFill color={emotionColor[key]}/></td>
              </tr>
            )
          })}
        </Table>
      </div>
    );
  }
    
  export default App;

  const Table = styled.div`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  border: 2px solid black;
  padding: 8px;
  margin: 5px;
  border-radius: 9px;
  text-align: left;
  color: white;
  margin-left:50px;
  margin-right: 50px;
  .emotion{
    font-size: 22px;
    padding-left: 110px;
  }
  .emotion2{
    font-size: 22px;
    padding-left: 90px;
  }
  .date{
    font-size: 22px;
    text-align: center;

  }
  .center{
    
  width:100%;
  display: flex;
  justify-content: center;

  }
  .dateHeader{
    font-size: 22px;
    text-align: center;
    padding-right: 45px;
    padding-left: 50px;
  }
  `