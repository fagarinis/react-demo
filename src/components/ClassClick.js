import React, {Component} from 'react';


class ClassClick extends Component {

    constructor(props) {
        super(props);
    }

    clickHandler() {
        console.log("ClassClick: clicked button")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}> classClick me</button>
            </div>
        )
    }
}

export default ClassClick;
