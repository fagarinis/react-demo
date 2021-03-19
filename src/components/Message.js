import React, {Component} from 'react';

class Message extends Component {

    constructor() {
        super(); // questa è necessaria
        console.log(this);
        this.state = { // lo state è null di default
            message: 'Welcome visitor'
        };
    }

    changeMessage() {
        this.setState({ // così si cambia lo stato
            message: 'grazie per esserti iscritto'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                {/*l'onClick deve essere camelCase!*/}
                <button onClick={() => this.changeMessage()}>Iscriviti</button>
            </div>


        );
    }
}

export default Message;
