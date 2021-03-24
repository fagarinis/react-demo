import React, {useState} from 'react';

function ReactMemoDemo(props) {

    const [count, setCount] = useState(0);

    return (
        <div>Button counter: {count}</div>
    );
}

// permette di creare un componente funzionale che viene ri-renderizzato solo se il suo state o props vengono modificate
export default React.memo(ReactMemoDemo);
