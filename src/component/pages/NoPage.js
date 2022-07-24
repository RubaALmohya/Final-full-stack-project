import React from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";


const NoPage = () => {
  return (
    <div>
<Container>
    <LeftContainer>
<Spline scene="https://prod.spline.design/tqg4t9P-U7k5svR6/scene.splinecode" />
</LeftContainer>
<RightContainer>
    <Wrapper>
<Typewriter
            options={{ loop: true, delay: 70, skipAddStyles: true, cursor:'_'}}
            onInit={(typewriter) => {
              typewriter
                .typeString("404")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
          </Wrapper>
<h1>Page Not Found</h1>
<p>Mr. Moody looked everywhere in our website, but couldn't find the requested url.</p>
</RightContainer>
</Container>
    </div>
  )
}

export default NoPage;


const Container = styled.div`
padding: 100px;
background-color: #0b0b25;
`
const LeftContainer = styled.div`
margin-left: auto;
width: 50%;

`
const RightContainer = styled.div`
font-family: "Cutive Mono", monospace;
width: 50%;
color: white;
`;

const Wrapper = styled.div`
font-size: 40px;
`;