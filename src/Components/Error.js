import React from 'react';
import err from './error.png';


function Error() {
  return (<div className='container'>
      <div className="alert alert-danger" role="alert"><i className="fas fa-exclamation-triangle fa-lg"> </i> API is Down!!!! We will be back soon. Try Again Later
</div>
      <img className="img-fluid"src={err} alt="API is down. We will be back soon" ></img>
      
  </div>);
}

export default Error;
