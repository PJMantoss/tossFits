import React from 'react';
import PropTypes from 'prop-types';

function Page({ children, cool }) {
  return (
    <Page>
      <h3>{cool}</h3>
        {children}
    </Page>
  )
}

Page.PropTypes = {
  cool: PropTypes.string,
  children: PropTypes.any
}

export default Page