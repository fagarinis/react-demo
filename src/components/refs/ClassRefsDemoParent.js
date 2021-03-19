import React, {Component} from 'react';
import ClassRefsDemo from "./ClassRefsDemo";

class ClassRefsDemoParent extends Component {

    constructor(props) {
        super(props);
        this.childComponentRef = React.createRef();
    }

    clickHandler = () => {
        this.childComponentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <ClassRefsDemo ref={this.childComponentRef}/>
                <button onClick={this.clickHandler}>Clicca per fare il focus dell'input nel child component</button>
            </div>
        );
    }
}

export default ClassRefsDemoParent;
