import React, {Component} from 'react';

class ClassRefsDemo extends Component {

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    focusInput() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} placeholder="Child Component (ClassRefsDemo)"/>
            </div>
        );
    }
}

export default ClassRefsDemo;
