import React from 'react';
import PropTypes from 'prop-types';

Table.propTypes = {
    rows: PropTypes.number,
    columns: PropTypes.number
};

function Table({rows}) {
    const tableData = [];
    let id = 1;
    for (let i = 0; i < rows; i++) {
        tableData.push({id: id, nome: "Nome" + id, cognome: "Cognome" + id});
        id++;
    }


    return (
        <>
            <h1>Tabella fatta con React.Fragment shortcut </h1>
            <table>
                {
                    tableData.map(data => (
                        <React.Fragment>
                            <tr>
                                <td>{data.nome}</td>
                                <td>{data.cognome}</td>
                            </tr>
                        </React.Fragment>
                    ))
                }

            </table>

        </>
    );
}

export default Table;
