import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styles from '../../../appStyles.module.css'

class PureComponentTutorial extends PureComponent {
    render() {
        return (
            <text>
                <h2>Pure Component</h2>
                è un componente che implementa il metodo shouldComponentUpdate in modo tale che
                    si ri-renderizza solo se props/state precedenti sono diversi da quelli attuali:
                    <ul>
                        <li><b>Confronto valore</b> e tipo per parametri primitivi</li>
                        <li><b>Confronto tra reference </b> per parametri complessi (array, object...)</li>
                    </ul>

                <div className={styles.success}>
                Vantaggi: performance boost, in alcuni scenari, in cui non serve serve rigenerare un child component
                </div>
            </text>
        );
    }
}

PureComponentTutorial.propTypes = {};

export default PureComponentTutorial;
