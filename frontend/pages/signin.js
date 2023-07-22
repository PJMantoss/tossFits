import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import RequestReset from '../components/RequestReset';
import styled from 'styled-components';

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  grid-gap: 2rem;
`;

function signin() {
  return (
    <GridStyle>
      <SignIn />
      <SignUp />
      <RequestReset />
    </GridStyle>
  )
}

export default signin;