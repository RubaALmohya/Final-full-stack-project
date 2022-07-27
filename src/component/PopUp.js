import React from 'react';
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const PopUp = (props) => {
  return (props.trigger) ? (
    <PopUpContainer>
        <PopUpContainerInner>
            <CloseBtn onClick={()=> props.setTrigger(false)}> <GrClose color="black" fontSize="24px"/> </CloseBtn>
            {props.children}
        </PopUpContainerInner>
    </PopUpContainer>
  ) :"";
}

export default PopUp;

const PopUpContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.4);
display: flex;
justify-content: center;
align-items: center;

`

const PopUpContainerInner = styled.div`
border-radius: 7px;
position: relative;
padding: 32px;
width: 100%;
max-width: 640px;
background-color: white;

`
const CloseBtn = styled.button`
position: absolute;
top: 16px;
right: 16px;
border: none;
background:none;

`