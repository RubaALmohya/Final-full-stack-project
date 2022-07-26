import React from 'react';
import {BsFillSquareFill} from 'react-icons/bs';
import styled from "styled-components";

// Example of a data array that
// you might receive from an API
const data = [
    { user_moods_date:"2022-07-26", user_moods:{emotion_name:"sad", emotion_color:"#898a88"}},
    { user_moods_date:"2022-07-26", user_moods:{emotion_name:"neutral", emotion_color:"white"}},
    { user_moods_date:"2022-07-26", user_moods:{emotion_name:"happy", emotion_color:"#ffe347"}},
    { user_moods_date:"2022-07-26", user_moods:{emotion_name:"fear", emotion_color:"#b04bdb"}},
    { user_moods_date:"2022-07-26", user_moods:{emotion_name:"disgust", emotion_color:"#915a2a"}},
    { user_moods_date:"2022-07-26", user_moods:{emotion_name:"angry", emotion_color:"#db4b4b"}},
    { user_moods_date:"2022-07-26", user_moods:{emotion_name:"surprised", emotion_color:"#46cfd4"}},
  ]
    
  function App() {
    return (
      <div>
        <Table>
          <tr className='center'>
            <th className='dateHeader'>Date</th>
            <th className='emotion'> Emotion </th>
            </tr>
          {data.map((val, key) => {
            return (
              <tr key={key} className='center'>
                <td className='date'>{val.user_moods_date}</td>
                <td className='emotion2'> <BsFillSquareFill color={val.user_moods.emotion_color}/></td>
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
    /* display: table;
  margin: 0 auto; */
  width:100%;
  display: flex;
  justify-content: center;

  }
  .dateHeader{
    font-size: 22px;
    text-align: center;
    padding-right: 60px;
    padding-left: 60px;
  }
  `