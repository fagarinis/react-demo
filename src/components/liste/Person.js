import React from 'react';

function Person({person}) {
    return (
        <div>
            <h2>{person.id} {person.name}</h2>
        </div>
    )
}

export default Person;
