import React, {useState} from 'react';

function HookCounter(props) {

    // array destructuring
    const [count, setCount] = useState(0); // returna un array contenente una variabile per lo stato e una funzione per settare tale stato


    //importante: se si vuole utilizzare la funzione per settare lo stato, su uno stato che è un object o un array, bisogna usare lo spread operator ...
    return (
        <React.Fragment>
            {/*non è safe!*/}
            <button onClick={() => setCount(count + 1)}>Non-Safe Counter {count}</button>

            {/*metodo safe per quando si deve aggiornare lo state basandosi su uno state precedente*/}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Safe Counter: {count}</button>
        </React.Fragment>


    );
}

export default HookCounter;
