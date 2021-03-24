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

function CounterWithReducerThree(props) {


    // ottiene lo stato e la funzione dispatch, che consente di eseguire una determinata action della reducerFunction
    const [count, dispatch] = useReducer(reducerFunction, initialState);
    const [count2, dispatch2] = useReducer(reducerFunction, initialState);

    return (
        <div>
            Counters using multiple reducers
            <div>
                Count[1]: {count}
                <button onClick={() => dispatch('increment')}>Increment[1]</button>
                <button onClick={() => dispatch('decrement')}>Decrement[1]</button>
                <button onClick={() => dispatch('reset')}>Reset[1]</button>
            </div>

            <div>
                Count[2]: {count2}
                <button onClick={() => dispatch2('increment')}>Increment[2]</button>
                <button onClick={() => dispatch2('decrement')}>Decrement[2]</button>
                <button onClick={() => dispatch2('reset')}>Reset[2]</button>
            </div>
        </div>
    );
}

export default CounterWithReducerThree;
