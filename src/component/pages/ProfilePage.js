import React from 'react'
import Profile from '../../images/profile.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import Calender from '.././Calender';

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #264871; 
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;
const Container2 = styled.div`
display: block;
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    margin-left: 50px;
    border: 2px solid #000;
    border-radius: 50%;
`;

const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
    color: white;
    font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
    color: white;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const MainBg = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0b0b25;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export default function ProfilePage() {
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
            <StyledImg src={Profile} />
            <StyledH1>Ashutosh Hathidara</StyledH1>
            <Calender></Calender>
        </Container>
        <br></br>
        <Container2>
       
       </Container2>
    </MainBg>
  )
}
