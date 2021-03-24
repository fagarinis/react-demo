import React from 'react';

function ChildA({age, incrementAge}) {
    console.log("ChildA Rendering");
    return (
        <div>
        Age: {age}
            <button onClick={incrementAge}>Increment Age</button>
        </div>


    );
}

// React.memo permette di rirenderizzare il component
// solo se una sua reference delle props o lo state cambia
export default React.memo(ChildA);
