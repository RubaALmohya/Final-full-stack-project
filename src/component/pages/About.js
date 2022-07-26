import React from 'react';
import styled from 'styled-components';
import RobotImg from '../../images/AboutPicture.png';
const About = () => {
  return (
    <div>
      <Section>
        <Content>
          <ImgAbout>
          <img src={RobotImg} style={{width: "700px"}}/>
          </ImgAbout>
          <Text>
            <h1 style={{color:"white", fontSize:"64px", marginBottom: "20px", textTransform: "capitalize"}}> About Mr. Moody</h1>
            <h5 style={{color: "white", fontSize:"25px", marginBottom: "25px", textTransform:"capitalize", letterSpacing: "2px"}}> Mission: Change Humans' Mood </h5>
            <p style={{color: "#c0c4d6", fontSize: "18px", lineHeight:"28px", letterSpacing: "1px", marginBottom:"45px"}}> I was created and designed by a team from Tuwaiq Academy. I was told that I can assist humans to be happier. The first step is to make an analysis of a webcam picture to detect a person's emotion from his facial expression. Afterward, the content will be shown to hopefully change the person's mood. I know that the user's mood has become better from adding content to his favorite besides his facial expression.  </p>
            <Btn>
            Contact us
            </Btn>
          </Text>
         
        </Content>
      </Section>
    </div>
  )
}

export default About;

const Section = styled.div`
width: 100%;
height: 100vh;
background-color: #0b0b25;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 1180px){
  width: 100%;
  height: auto;
  padding: 70px 0px;
}
`

const Content = styled.div`
width: 1280px;
max-width: 95%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:  space-around;
`
const ImgAbout = styled.div`
height: 300px;
width:  600px;
max-width: 100%;
@media screen and (max-width: 1180px){
 margin-bottom: 100px;
}

`
const Text = styled.div`
width: 550px;
max-width: 100%;
padding: 0 10px;

`
const Btn = styled.button`
background-color: #264871;
color: black;
border: 2px solid transparent;
text-decoration: none;
padding: 10px 30px;
border-radius: 30px;
font-size: 17px;
font-weight: bold;
&:hover{
  transform: scale(1.2);
  background-color: transparent;
  border: 2px solid #264871;
  color: #264871;
  transition: 0.4s;
  cursor: pointer;
}
`