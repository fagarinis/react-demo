import React, {Component} from 'react';

class ClickCounterTwo extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <button onClick={incrementCount}>ClickTwo cliccato {count} volte</button>
        );
    }
}

export default ClickCounterTwo;
