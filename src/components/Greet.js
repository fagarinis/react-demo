import React from 'react';

// function Greet() {
//     return <h1>hello federico</h1>
// }

// props (per convenzione) contiene gli attributi assegnati al component
const Greet = (props) => { // oppure invece di props si usa ({name, heroName, children}) destructurato
    // props.name="ciao" ERRORE le props sono immutabili
    return (
        <div>
            <h1>greet {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )

}

export default Greet;
