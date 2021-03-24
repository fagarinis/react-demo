import React, {useReducer} from 'react';


const initialState = 0;
const reducerFunction = (state, action) => { // funzione che returna il nuovo stato in base all'action passata
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterWithReducer(props) {


    // ottiene lo stato e la funzione dispatch, che consente di eseguire una determinata action della reducerFunction
    const [count, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            Count: {count}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default CounterWithReducer;
