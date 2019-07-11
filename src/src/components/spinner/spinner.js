import React from 'react';
import './gear.css';

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-gear"><div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
        </div>
    )
}

export default Spinner;
