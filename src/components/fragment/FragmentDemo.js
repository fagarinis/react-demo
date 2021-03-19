import React from 'react';

function FragmentDemo(props) {
    return (
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p> se vengono inseriti tag html multipli devono essere wrappati in un unico tag ad esempio un div
                oppure si può utilizzare React.Fragment per non renderizzare tag aggiuntivi che fanno da wrapper nel DOM</p>
        </React.Fragment>
    );
}

export default FragmentDemo;
