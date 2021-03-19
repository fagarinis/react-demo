import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }


    static getDerivedStateFromError(error) {
        const newState = {hasError: true}
        return newState;
    }


    render() {
        if (this.state.hasError) {
            return (
                <h3>Ops... qualcosa è andato storto.</h3> // NB: mostrato SOLO in PRODUZIONE (cliccare la X in alto a dx nella pagina per vederlo anche in DEVELOP)
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
