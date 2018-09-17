import React from 'react';
import styled from 'styled-components';
import TextScrambler from "../../../commons/TextScrambler";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const PrimaryHeader = styled.a`
  color: #fff;
  font-size: 5rem;
  text-decoration: none;
  position: relative;
  
  &:before {
    content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transform-origin: left;
  transition: .25s linear;
  background-color: #fff;
}
&:hover:before,
&:focus:before {
  visibility: visible;
  transform: scaleX(1);
}
`;
const SubHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
`;
const Text = styled.h4`
  
`;
const PhoneNumber = styled.h4``;
const ContactDetail = () => (
    <Container>
        <PrimaryHeader href='#'>
            <TextScrambler delay={1000} text={'cktran16x2@gmail.com'}/>

        </PrimaryHeader>
        <SubHeader>
            <Text><TextScrambler text={'Phone Number'} delay={1500}/></Text>
            <PhoneNumber><TextScrambler text={'(+1) 416-998-7489'} delay={1700}/></PhoneNumber>
        </SubHeader>
    </Container>
);

export default ContactDetail;