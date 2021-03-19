import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        // qui gli attributi sono disponibili in this.props
        return <h1>welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome;
