import React from 'react';
import styles from './hero.module.scss'

function hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__logo}>
                <img src="/images/scheduleonce-logo-banner.svg" />
            </div>
            <div className={styles.hero__text}>
                <span className={styles.hero__title}>
                    Let bookings fly in.
                </span>
                <span className={styles.hero__subtitle}>
                    Smart customer  scheduling at scale
                </span>
            </div>

            <button className={styles["try-it-free"]}>
                Try it free
            </button>
            <a href="#" className={styles.into__link}>
                <span className={styles.intro__link__text}>
                    Play an intro
                </span>
                <img src="/images/white-link-arrow.svg" className={styles.intro__link__icon} />
            </a>
        </div>
    )
}

export default hero
