import React from "react";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <MainContainer id={"main"}>
      <MainBg>
      <Spline scene="https://prod.spline.design/seOvjg8OCrZwF2Mh/scene.splinecode" />
      </MainBg>
      <MainContent>
        <TypeContent>
          <Typewriter
            options={{ loop: true, delay: 70, skipAddStyles: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a robot ")
                .pauseFor(200)
                .deleteChars(8)
                .typeString("Mr. Moody . .")
                .pauseFor(500)
                .deleteAll()
                .typeString(" My mission is to change your mood.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Let's get started !")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
        </TypeContent>
      </MainContent>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  background: #0b0b25;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
const MainBg = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0b0b25;
`;

const MainContent = styled.div`
  font-weight: bold;
  z-index: 3;
  max-width: 700px;
  position: absolute;
  padding-top: 200px;
  padding-right: 100px;
  right: 0px;
  top: 0px;
`;
const TypeContent = styled.div`
  font-family: "Cutive Mono", monospace;
  color: white;
  font-size: 40px;
  @media screen and (max-width: 1250px) {
    font-size: 30px;
  }
  @media screen and (max-width: 780px) {
    font-size: 20px;
  }
`;
