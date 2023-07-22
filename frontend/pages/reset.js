import React from 'react';
import RequestReset from '../components/RequestReset';

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
    </div>
  )
}

export default resetPage;