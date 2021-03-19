import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Render Props è un pattern di React per condividere codice tra più componenti in modo funzionale
class CounterRenderProps extends Component {
    constructor({render}) {
        super({render});

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        // necessita di una prop render i.e. una funzione render che returna un componente
        // in pratica dice di mettere a disposizione this.state.count e this.incrementCount per qualsiasi componente si voglia renderizzare
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

CounterRenderProps.propTypes = {
    render: PropTypes.func
};


export default CounterRenderProps;

