import React from 'react';

// creo il context e setto il value di  default nel caso non si utilizzasse il Provider
const UserContext = React.createContext({name: "defaultName", isLoggedIn: false, cf: ""});

// TUTTI I DISCENDENTI wrappati dal componente Provider avranno accesso alla sua prop "value"
export const UserContextProvider = UserContext.Provider;

// UN componente wrappato dal componente Consumer potrà consumare effettivamente
// la prop "value" del provider se ha un Provider antenato, altrimenti usa il valore di default)"
export const UserContextConsumer = UserContext.Consumer;

export default UserContext;
