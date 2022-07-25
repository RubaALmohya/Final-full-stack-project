import React from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn} from 'mdb-react-ui-kit';
import { MdFavoriteBorder} from "react-icons/md";
import styled from 'styled-components';

const MyFavList = () => {
  return (
      <>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{marginLeft:"5px", marginRight:"5px"}}>
    <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn className='text-dark' color='light' style={{width:"120px"}}>
      <MdFavoriteBorder size={30} color={"#0b0b25"}/>
      </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn className='text-dark' color='light' style={{width:"120px"}}>
      <MdFavoriteBorder size={30} color={"#0b0b25"}/>
      </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn className='text-dark' color='light' style={{width:"120px"}}>
      <MdFavoriteBorder size={30} color={"#0b0b25"}/>
      </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn className='text-dark' color='light' style={{width:"120px"}}>
      <MdFavoriteBorder size={30} color={"#0b0b25"}/>
      </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </> 
  )
}

export default MyFavList;
