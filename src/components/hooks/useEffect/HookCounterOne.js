import React, {useEffect, useState} from 'react';

function HookCounterOne(props) {


    const [count, setCount] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => { // chiamato A OGNI RENDER del componente (poca ottimizzazione)
        document.title = `cliccato ${count} volte`
    })

    useEffect(() => { // chiamato all'inizio e  ogni volta che le variabili nel secondo parametro cambiano
        document.title = `cliccato ${count} volte`
    }, [count])

    useEffect(() => { // chiamato solo all'inizio
        document.title = `cliccato ${count} volte`
    }, [])


    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }


    useEffect(() => {
        window.addEventListener("mousemove", logMousePosition)

        return () => {
            // cleanup function (chiamata quando il componente viene unmountato
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])


    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Cliccato {count} volte
            </button>

        </div>
    );
}

export default HookCounterOne;
