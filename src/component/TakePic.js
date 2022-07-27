import React from 'react';
import Img from '../images/screen.png';
import styled from "styled-components";

function TakePic() {
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
