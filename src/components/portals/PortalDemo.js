import React from 'react';
import ReactDOM from 'react-dom';


// demo per mostrare come inserire un componente come child component di in un qualsiasi DOM node renderizzato con un id
function PortalDemo(props) {
    return ReactDOM.createPortal(
        <h1>Portals demo</h1>,
        document.getElementById('portal-root') // <div id="portal-root"></div> nell file index.js invece che nella root di default
    )
}

/**
 * I portals sono utili per renderizzare componenti (solitamente esterni, come i modal, sotto un diverso DOM node,
 * questo talvolta è necessario per non sfasciare la UI se il componente ha uno stile diverso dalla root.
 */


export default PortalDemo;
