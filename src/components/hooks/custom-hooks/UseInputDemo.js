import React from 'react';
import useInput from "./useInput";

function UseInputDemo(props) {

    const [nome, bindNome, resetNome] = useInput('');
    const [cognome, bindCognome, resetCognome] = useInput('');


    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${nome} ${cognome}`);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Nome</label>
                    <input {...bindNome}
                           type='text'
                    />
                </div>
                <div>
                    <label>Cognome</label>
                    <input {...bindCognome}
                           type='text'
                    />
                </div>
                <button>Invia</button>

            </form>


        </div>
    );
}

export default UseInputDemo;
