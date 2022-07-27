import React , {useState , useEffect } from 'react'
import Profile from '../../images/report.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
/* background: #C7D2FE66;  */
background: #264871;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
margin-top: 70px;
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    margin-left: 65px;
    border: 2px solid #000;
    border-radius: 50%;
`;

const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
    margin-left: 100px;
`;

const StyledH2 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const StyleInput = styled.input`
    width: 100%;
	border: 2px solid rgba(0, 0, 0, 0);
	outline: none;
	background-color: rgba(230, 230, 230, 0.6);
	padding: 0.5rem 1rem;
	font-size: 1.1rem;
	margin-bottom: 22px;
	transition: .3s;
    margin-left: 5px;
`
const StyleButton = styled.button`
    width: 100%;
	padding: 0.5rem 1rem;
	background-color:rgba(230, 230, 230, 0.6);
	font-size: 1.1rem;
	border: none;
	outline: none;
	cursor: pointer;
	transition: .3s;
    align-items: center;
    margin-left: 5px;
    

`

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

export default function Register() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    
    

    const postData = () =>{
        axios.post('http://127.0.0.1:8000/user_app/register/',{username , email , password , confirmpassword})
        .then(res => {console.log(res)
        
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <MainBg> 
        <br/><br/><br/><br/>
    <Container 
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
           
        }}
    >
        <StyledImg src={Profile} />
        <form>
        <StyledH1 style={{color:"#fff"}} >Register</StyledH1>
            <StyleInput 
            type="text"
            value={username}
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
            /><br/>
            <StyleInput 
            type="email"
            value={email}
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
            /><br/>
            <StyleInput
            type="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
            /><br/>
            <StyleInput
            type="password"
            value={confirmpassword}
            placeholder="Confirm Password"
            onChange={({ target }) => setConfirmpassword(target.value)}
            />
            <StyleButton type="submit" onClick={postData}>Register</StyleButton>
            </form>
    </Container>
</MainBg>
  )
}
