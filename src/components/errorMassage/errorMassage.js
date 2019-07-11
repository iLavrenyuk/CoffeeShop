import React from 'react';
import './errorMassage.css'
import img from '../../img/error.jpg';

const ErrorMassage = () => {
    return (
        <div>
            <img src={img} alt='error' className='shop__girl'/>
        </div>
    )
}

export default ErrorMassage;