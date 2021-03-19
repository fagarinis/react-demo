import React, {Component} from 'react';

class RefsDemo extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); // createRef approach - Creazione della reference nel component per il binding al tag html <input>

        // callback approach
        this.callbackRef = null; // contiene la reference dell'elemento
        this.setCallbackRef = (DOMElement) => { // la funzione del setting della reference. verrà passata come parametro ref nel tag html
            this.callbackRef = DOMElement;
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus() // utilizzo della ref (createRef approach)
        // console.log(this.inputRef);

        if (this.callbackRef) {
            this.callbackRef.focus() // utilizzo della ref (callback approach)
            console.log(this.callbackRef)
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value); // accesso al valore dell'input
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} placeholder="createRef approach"></input>
                <input type="text" ref={this.setCallbackRef} placeholder="callback approach"></input>
                <button onClick={this.clickHandler}>Clicca qui per visualizzare il valore</button>
            </div>
        );
    }
}

export default RefsDemo;
