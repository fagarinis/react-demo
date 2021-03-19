import React from 'react';

/**
 * HOC - High order component, è una modo di usare una funzione che accetta un componente e returna il componente "potenziato" con nuove funzionalità.
 * serve ad applicare la stessa funzionalità a più classi diverse senza ripetere il codice
 * @param WrappedComponent - è il componente originale a cui aggiungere la funzionalità
 *
 * nei commenti * le convenzioni da usare
 *
 * @returns {NewComponent}
 */
// * il nome della classe è lo stesso del nome del file in lowerPascalCase
const withCounter = (WrappedComponent) => { // * ci si riferisce al componente originale con WrappedComponent

    // * il nome della classe returnata è lo stesso del nome del file in UpperPascalCase
    class WithCounter extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1};
            })

        }


        render() {
            // passa delle nuove props ai componenti che utilizzano questo componente con {... this.props}
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                name={"from HOC"}
                {... this.props}
            />
        }

    }

    return WithCounter;

}


export default withCounter
