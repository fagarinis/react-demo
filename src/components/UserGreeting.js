import React, {Component} from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // in questo modo il componente viene renderizzato solo
        // se la variabile è true (è come un ngIf di angular
        return this.state.isLoggedIn && (
            <div>
                <div>Welcome Steve</div>
            </div>
        );
    }
}

export default UserGreeting;
