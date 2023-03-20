import React from 'react';
import styles from './NewLineText.module.css'

export default function NewLineText({text}) {
    const newText = text.split('\n').map((item, i) => (
        <span key={i}>
          {item}
          <br />
        </span>
      ));
    
    return (
        <React.Fragment>   
            <div className={styles.text}>{newText}</div>
        </React.Fragment>
    );
}

