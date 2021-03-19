import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // questa implementazione di increment da problemi se chiamata piu volte perché
    // il setstate si basa su uno state precedente, in questi casi vedere l'altra implementazione
    // increment() {
    //     // this.state.count += 1 //da non fare perché cambia il valore, ma il componente non viene rirenderizzato quindi non si vede sul component
    //     this.setState({ // OK, funzione asincrona
    //         count: this.state.count + 1
    //     }, () => {console.log('callBack value', this.state.count)}) // qui mostra il valore aggiornato
    //     console.log(this.state.count) // non mostra il valore aggiornato perché setState è asincrona!
    // }

    increment() {
        // passare una funzione al setState se si vuole aggiornare lo state basandosi su uno stato precedente
        this.setState((previousState) => ({
            count: previousState.count + 1
        }))
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                count - {this.state.count}
                <button onClick={() => this.incrementFive()}>
                    incrementa
                </button>
            </div>
        );
    }
}

export default Counter;
