import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LifecycleTutorial extends React.Component {
    //I Componenti eseguono diversi metodi di lifecycle a determinati passi del lifecycle del componente

    // Ciclo di MOUNTING: quando l'istanza del componente viene creata e inserita nel DOM
    // 1 -  constructor -> inizializzazione NO side effect
    // 2 - static getDerivedStateFromProps(props, state)
    // 3 - render(), ed esegue il ciclo di mounting di eventuali children
    // 4 - componentDidMount, invocato dopo il rendering del componente e dei suoi children, può causare side effect (chiamate HTTP, ajax)

    // Ciclo di UPDATE: quando un componente viene ri-renderizzato a seguito di un cambiamento o di props
    // 1 - static getDerivedStateFromProps(props, state)
    // 2 - shouldComponentUpdate(nextProps, nextState) riceve le props e state e decide se il componente deve ri-renderizzarsi returnando un booleano (performance optimization), di default returna true
    // 3 - render()
    // 4 - getSnapshotBeforeUpdate(prevProps, prevState) - chiamato prima di cambiare il DOM, prende in input lo stato precedente, se non returna null viene utilizzato come terzo parametro nel passo 5
    // 5 - componentDidUpdate(prevProps, prevState, snapshot) - quando il render è finito, si possono fare side effect (chiamata HTTP, ajax)


    // Ciclo di UNMOUNTING: quando il componente è rimosso dal DOM e non più renderizzato
    // 1- componentWillUnmount() - usato per cancellare eventuali richieste HTTP, eventi, subscription, timer...

    // Ciclo di ERROR HANDLING: se c'è un errore durante il rendering, nel costruttore o in un metodo di lifecycle
    // 1 - static getDerivedStateFromError(error)
    // 2 - componentDidCatch(error, info)

    // MOUNTING
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }


    componentWillMount() {

    }

    // MOUNTING
    componentDidMount() {

    }


    componentWillReceiveProps(nextProps) {

    }

    // MOUNTING
    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    // UNMOUNT
    componentWillUnmount() {

    }

    /**
     * da utilizzare per cambiare lo state e renderizzare una UI di fallback in caso di errori nei children,
     * un componente che implementa questo meccanismo è detto Error Boundary.
     * NB: gli error boundary sono mostrati solo in ambiente di produzione (cliccare la X in alto a dx nella pagina per vederlo) mentre
     * in ambiente di develop l'errore viene sempre mostrato
     */
    static getDerivedStateFromError(error) {

    }

    // ERROR HANDLING
    /**
     * contiene il catch dell'errore prodotto, utilizzato per loggare gli errori
     */
    componentDidCatch(error, errorInfo) {
    }

    // MOUNTING, UPDATING
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LifecycleTutorial;
