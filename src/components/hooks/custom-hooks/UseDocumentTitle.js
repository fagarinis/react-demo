import React, {useEffect} from 'react';

// applica un hooks che modifica il title in base al valore di count
function useDocumentTitle(count) {

    useEffect(() => {
        document.title = `count ${count}`;
    }, [count])

    return (
        <div></div>
    );
}

export default useDocumentTitle;
