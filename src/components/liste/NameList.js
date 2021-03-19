import React, {Component} from 'react';
import Person from "./Person";

function NameList() {
    const heroes = [
        {id: 1, name: 'Steve'},
        {id: 2, name: 'Tony'},
        {id: 3, name: 'Bruce'}
    ];
    // key deve essere un valore unico per ogni valore, serve a react per renderizzare la lista in modo efficiente, ad esempio
    // durante un update, se un elemento viene aggiunto o rimosso, react scorre tutta la lista per fare il match tra le differenze
    // tra prima dell'update e dopo, e cambia solo le differenze, invece di rirenderizzare tutta la lista
    // N.B: la key deve essere un parametro stabile per permettere il sort e il filter della lista, e non cose come l'index nella list.
    const heroesList = heroes.map(hero => <Person key={hero.id} person={hero}/>); // così si replica l'ngFor di angular
    // const heroesList = heroes.map((hero, index) => <Person key={index} person={hero}/>); // NO
    return (<div>{heroesList}</div>)

}

export default NameList;
