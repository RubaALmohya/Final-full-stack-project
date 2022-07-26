import React , {useEffect} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import '../NavbarElement/NavbarElement.css'
import Logo from '../../images/logoMood.png';
import $ from 'jquery'; 

const Img=styled.img`

height: 50px;
`


export default function NavbarElement() {
  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);
  return (

    <nav className="navbar navbar-expand-lg navbar-mainbg" style={{width: "100%" , height:"63px" }}>

    
        <NavLink className="navbar-brand navbar-logo" to="/" >
           <Img src={Logo}/>
        </NavLink>

        <button 
        className="navbar-toggler " style={{width:"6%" , marginLeft:"64px" , backgroundColor:"#264871" , marginTop:"-10px" , borderColor:"rgb(38, 72, 113)" }}
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
               Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                About
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/MoodChanger" exact>
               Mood Changer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ProfilePage" exact>
               Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login" exact>
                Login
              </NavLink>
            </li>
        </ul>
        
      </div>
  

        
    </nav>
  )
}
