import React from 'react';
import styles from './dnasection.module.scss'

function dna() {
    return (
        <div className={styles.dna}>
            <h2 className={styles.dna__title}>ScheduleOnce’s DNA</h2>
            <div className={styles.dna__cards}>
                <div className={styles.dna__cards__inner}>
                    <img src="/images/comperhensive-icon.svg" />
                    <h4>Comperhensive</h4>
                </div>
                <div className={styles.dna__cards__inner}>
                    <img src="/images/integrated-icon.svg" />
                    <h4>Integrated</h4>
                </div>
                <div className={styles.dna__cards__inner}>
                    <img src="/images/Costumizable-icon.svg" />
                    <h4>Costumizable</h4>
                </div>
                <div className={styles.dna__cards__inner}>
                    <img src="/images/Collobrative-icon.svg" />
                    <h4>Collobrative</h4>
                </div>
                <div className={styles.dna__cards__inner}>
                    <img src="/images/Friendly-icon.svg" />
                    <h4>Friendly</h4>
                </div>
                <div className={styles.dna__cards__inner}>
                    <img src="/images/Secure-icon.svg" />
                    <h4>Secure</h4>
                </div>
            </div>
        </div>
    )
}

export default dna
