import React from 'react';
import { Link } from 'react-router-dom';
const Nomatch = () => {
    return (
        <div className='d-flex justify-content-center align-items-center h-90'>
            <div>
                <p className='display-3'>page not found 😓</p>
                <Link className='display-6' to="/home">back to home page</Link>
            </div>
        </div>
    );
};

export default Nomatch;