import React from 'react';
import './myStyles.css';

function Stylesheet({orangeText}) {

    let className = orangeText ? 'orange-text' : '';

    return (
        <div className={`${className} font-xl`}>Stylesheet</div>
    )
}

export default Stylesheet;
