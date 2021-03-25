import React, {useMemo, useState} from 'react';

function UseMemoDemo(props) {
    console.log("Rendering UseMemoDemo");

    const [counterOne, setCounterOne] = useState(1);
    const [counterTwo, setCounterTwo] = useState(1);

    const incrementCounterOne = () => {
        setCounterOne(prevState => prevState + 1);
    }

    const incrementCounterTwo = () => {
        setCounterTwo(prevState => prevState + 1);
    }

    // function isEven(){
    //     let i = 0;
    //     while (i < 2000000000) i++;
    //     return counterOne % 2 == 0
    // }

    // useDemo permette di mantenere memorizzato un valore returnato dalla funzione di callback
    // nei casi in cui il component vieni ri-renderizzato (ad es. al variare di un qualsiasi valore nella JSX
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++; // funzione pesante....
        return counterOne % 2 == 0;
    }, [counterOne]);  //il valore viene ricalcolato solo al variare di queste dependencies


    return (
        // JSX
        <div>
            <div>
                <button onClick={incrementCounterOne}>Increment CounterOne {counterOne}</button>
                <span>{isEven ? "Numero Pari" : "Numero Dispari"}</span>
            </div>
            <div>
                <button onClick={incrementCounterTwo}>Increment CounterTwo: {counterTwo}</button>
            </div>
        </div>
    );
}

export default UseMemoDemo;
