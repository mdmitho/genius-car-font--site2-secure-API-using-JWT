import React from 'react';
import NotFoundPic from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-100 ' src={NotFoundPic} alt="" />
        </div>
    );
};

export default NotFound;