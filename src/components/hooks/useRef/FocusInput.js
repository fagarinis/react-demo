import React, {useEffect, useRef} from 'react';

function FocusInput(props) {

    // useRef crea un container per valori persistenti (anche ai render) che verrano memorizzati nel inputRef.current
    // cambiare il .current della ref non causa cambiamenti nel render del component
    const inputRef = useRef(null);

    useEffect(() => {
        // focus input element
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input ref={inputRef} type={'text'}/>
        </div>
    );
}

export default FocusInput;
