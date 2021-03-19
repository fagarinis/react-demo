import React from 'react';

/**
 * Componente funzionale che utilizza React.forwardRef per ottenere il parametro ref inserito dal componente padre
 * ed eventualmente assegnarlo a qualcuno dei suoi tag.
 * In questo modo si potrà referenziare quel tag dal parent component (vedi ForwardRefParentComponent.js)
 *
 * il forward reference è usato raramente in React (usato più che altro per librerie e componenti di alto ordine
 */
const ForwardRefComponent = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} placeholder="ForwardRefComponent"/>
        </div>
    );
})

export default ForwardRefComponent;
