import React from 'react';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

function resetPage({query}) {
    //console.log(props);
    if(!query?.token){
        return(
            <div>
                <p>You must provide a token</p>
                <RequestReset />
            </div>
        )
    }
  return (
    <div>
        <p>Reset Your Password</p>
        <Reset />
    </div>
  )
}

export default resetPage;