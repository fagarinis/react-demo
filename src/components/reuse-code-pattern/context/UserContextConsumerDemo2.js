import React, {Component} from 'react';
import UserContext from "./UserContext";

class UserContextConsumerDemo2 extends Component {

    static contextType = UserContext; // assegno il context al componente, ora this.context contiene il value
    // Attenzione, questo modo permette di sottoscriversi a un solo context, inoltre funziona solo per class component

    render() {
        return (
            <div>
                Hello {this.context.name}
            </div>
        );
    }
}

export default UserContextConsumerDemo2;
