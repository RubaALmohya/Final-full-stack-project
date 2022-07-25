import React, { useState } from 'react';
import {
  MDBCard,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import ShowContent from '../ShowContent';
import MyFavList from '../MyFavList';


const MoodChangerContent = () => {
    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
      if (value === fillActive) {
        return;
      }
  
      setFillActive(value);
    };

  return (
      <BG>
    <Container>
      <MDBCard className='text-center' style={{paddingTop: '7px'}}>
      <MDBTabs fill className='mb-3'>
        <MDBTabsItem>
        <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
         Mood Changer 
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
        <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
          My Favourite 
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
<Container2>
      <MDBTabsContent>
      <MDBTabsPane show={fillActive === 'tab1'}><ShowContent/></MDBTabsPane>
      <MDBTabsPane show={fillActive === 'tab2'}><MyFavList/></MDBTabsPane>
      </MDBTabsContent>
      </Container2>
      </MDBCard>
    </Container>
    </BG>
  )
}

export default MoodChangerContent;

const BG = styled.div`
 background-color: #0b0b25;

`
const Container = styled.div`
margin: auto;
width: 50%;
padding-top: 50px;
padding-bottom: 50px;
`
const Container2 = styled.div`
padding-top: 100px;
padding-bottom: 150px;
padding-left: auto;
padding-right: auto;
`