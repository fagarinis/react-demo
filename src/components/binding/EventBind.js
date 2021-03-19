import React, {Component} from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'hello'
        }

        //metodo ufficiale di binding di eventi nel costruttore (eseguito solo 1 volta)
        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({message: 'bye'});
    // }

    //class property as arrow function (approccio consigliato)
    clickHandler = () => {
        this.setState({message: 'bye'});
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*questoi metodo di binding, potrebbe causare problemi di performance
                poiché esegue il binding a ogni chiamata di render*/}
                {/*<button onClick={this.clickHandler.bind(this)}>EventBind Click</button>*/}
                {/*<button onClick={() => this.clickHandler()}>EventBind Click with arrow function</button>*/}

                <button onClick={this.clickHandler}>EventBind Click</button>

            </div>
        )
    }
}

export default EventBind;
