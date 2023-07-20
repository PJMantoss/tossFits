import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import styled from 'styled-components';

const GridStyle = styled.div``;

function signin() {
  return (
    <GridStyle>
      <SignIn />
      <SignUp />
    </GridStyle>
  )
}

export default signin;