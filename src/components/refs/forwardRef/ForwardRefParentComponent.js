import React, {Component} from 'react';
import ForwardRefComponent from "./ForwardRefComponent";

class ForwardRefParentComponent extends Component {

    constructor(props) {
        super(props);
        this.childrenRef = React.createRef();

    }

    clickHandler = () => {
        this.childrenRef.current.focus();
    }

    render() {
        return (
            <div>
                <h1>ForwardRefParentComponent</h1>
                <ForwardRefComponent ref={this.childrenRef}/>
                <button onClick={this.clickHandler}>Focus input tag of children component</button>
            </div>
        );
    }
}

export default ForwardRefParentComponent;
