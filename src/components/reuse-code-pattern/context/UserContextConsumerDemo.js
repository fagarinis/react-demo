import React, {Component} from 'react';
import UserContext from "./UserContext";

class UserContextConsumerDemo extends Component {

    // N.B: questo metodo funziona anche per i componenti funzionali e permette di consumare più context

    render() {
        // ottengo il value del context Provider
        return (
            <UserContext.Consumer>
                {user => {
                    return <div>Hello {user.name}</div>
                }}

            </UserContext.Consumer>
        );
    }
}

export default UserContextConsumerDemo;
