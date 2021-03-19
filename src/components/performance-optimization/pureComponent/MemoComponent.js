import React from 'react';

function MemoComponent(props) {
    console.log("Rendering MemoComponent")
    return (
        <div>
            Memo Component
        </div>
    );
}

// I memo hanno lo stesse proprietà del PureComponent ma per componenti funzionali (disponibile solo da versioni di  react 16.x in poi)
export default React.memo(MemoComponent);
