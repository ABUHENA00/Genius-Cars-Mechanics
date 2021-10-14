import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{width:"30%"}} src={error} alt="" />
            <br />
          <Link to="/">  <button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;