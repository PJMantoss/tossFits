import React from 'react'

function Page({ children, cool }) {
  return (
    <Page>
      <h3>{cool}</h3>
        {children}
    </Page>
  )
}

export default Page