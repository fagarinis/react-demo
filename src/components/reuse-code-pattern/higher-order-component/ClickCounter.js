import React, {Component} from 'react';
import withCounter from "./withCounter";

class ClickCounter extends Component {
    constructor({name}) {
        super({name});

    }

    render() {
        const {count, incrementCount, name} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>clicked {count} times, name = {name}</button>
            </div>
        );
    }
}

// applicazione dell higher order component
export default withCounter(ClickCounter);
