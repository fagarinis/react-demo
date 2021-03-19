import React from 'react';

// funzione fatta con JSX (javascript xml extension)
const Hello = () => {
    // return ( //questo è il modo piu semplice di usare React.createElement
    //     <div className='dummyClass'>
    //         <h1>Hello JSX</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className:'dummyClass'}, //class è una parola riservata, bisogna usare className
        React.createElement('h1', null, 'Hello nested created elemented'))
}

export default Hello;
