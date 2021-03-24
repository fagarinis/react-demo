import React, {useReducer} from 'react';


const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducerFunction = (state, action) => { // funzione che returna il nuovo stato in base all'action passata
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterWithReducerTwo(props) {


    // ottiene lo stato e la funzione dispatch, che consente di eseguire una determinata action della reducerFunction
    const [count, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <div>
                [CounterWithReducerTwo] firsCounter: {count.firstCounter}

                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>

            </div>

            <div>
                [CounterWithReducerTwo] secondCounter: {count.secondCounter}
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment second counter</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement second counter</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>


    );
}

export default CounterWithReducerTwo;
