import React from 'react';

function Hero({heroName}) {

    if (heroName.indexOf("_") != -1) {
        throw new Error('not valid heroName');
    }

    return (
        <h3>{heroName}</h3>
    );
}

export default Hero;
