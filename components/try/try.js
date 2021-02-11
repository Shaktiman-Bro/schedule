import React from 'react'
import styles from './trysection.module.scss'

function trys(){
    return (
        <div className={styles.try}>
            <div className={styles.try__icon}>
                <img src="/images/fav-icon-product-pages.svg" />
            </div>
            <h3 className={styles.try__title}>Enough said? It's time to try it.</h3>
            <p className={styles.try__subtitle}>There's no substitute for hands-on experience. Try it yourself—free for 14 days.</p>
            <div className={styles.try__button}>
                <button>
                    Try it free
                </button>
            </div>
        </div>
    )
}

export default trys
