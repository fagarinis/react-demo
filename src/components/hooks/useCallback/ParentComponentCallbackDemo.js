import React, {useCallback, useState} from 'react';
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function ParentComponentCallbackDemo(props) {
    console.log("ParentComponentCallbackDemo Rendering")

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(22000);

    // useCallback permette di mantenere memorizzata lo stesso oggetto function
    // anche se il parent viene ri-renderizzato
    // Attenzione: useCallback ha un OVERHEAD significativo, quindi va usata solo quando effettivamente serve a non ri-renderizzare roba pesante
    const incrementAge = useCallback(() => {
        setAge(prevState => prevState + 1);
    }, [age]) // la function cambierà solo se una di queste dipendenze cambia

    const incrementSalary = useCallback(() => {
        setSalary(prevState => prevState + 1000)
    }, [salary])

    return (
        <div>
            <ChildA age={age} incrementAge={incrementAge}/>
            <ChildB salary={salary} incrementSalary={incrementSalary}/>
        </div>
    );
}

export default ParentComponentCallbackDemo;
