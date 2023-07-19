import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const SIGNOUT_MUTATION = gql`
    mutation {
        endSession();
    }
`;

function SignOut({ children }) {
    const [ signout ] = useMutation(SIGNOUT_MUTATION);
  return (
    <button type="button">Sign Out</button>
  )
}

export default SignOut