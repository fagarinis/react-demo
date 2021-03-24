import React from 'react';

function ChildB({salary, incrementSalary}) {
    console.log("ChildB Rendering")
    return (
        <div>
            Salary: {salary}
            <button onClick={incrementSalary}>Increment Salary</button>
        </div>
    );
}

// React.memo permette di rirenderizzare il component
// solo se una sua reference delle props o lo state cambia
export default React.memo(ChildB);
