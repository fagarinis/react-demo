import React, {useContext} from 'react';
import UserContext from "../../reuse-code-pattern/context/UserContext";

// useContext è un modo più semplice con cui si consumano i context
function UseContextDemo(props) {

    const user = useContext(UserContext);

    return (
        <div>{user.name} from UseContextDemo</div>
    );
}

export default UseContextDemo;
