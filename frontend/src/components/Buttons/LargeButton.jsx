import React from 'react';
import styles from './LargeButton.module.css'

export default function LargeButton({text, onClick, color}) {
    return (
        <React.Fragment>
            <button className={styles.button}>{text}</button>
        </React.Fragment>
    );
}

