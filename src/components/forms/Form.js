import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comments: '',
            topic: 'vue'
        };

    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
        event.preventDefault(); // per evitare il refresh della pagina al submit
    }

    render() {
        const {username, comments, topic} = this.state; // destructuring

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>

                <button type="submit">Invia</button>
            </form>
        );
    }
}

Form.propTypes = {};

export default Form;
