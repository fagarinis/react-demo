import React from 'react';

// esempio di stilizzazione css inline
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline(props) {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    );
}

export default Inline;
