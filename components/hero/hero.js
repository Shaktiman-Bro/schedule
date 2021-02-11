import React from 'react';
import Link from 'next/link';
import styles from './hero.module.scss'
import Menu from './menu';

function hero() {
    return (<>
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.hero__logo}>
                    <img src="/images/scheduleonce-logo-banner.svg" />
                </div>
                <h2 className={styles.hero__title}>
                    <span>
                    Let bookings fly in.
                    </span>
                </h2>
                <p className={styles.hero__subtitle}>
                    Smart customer  scheduling at scale
                </p>
            </div>
            <div className={styles.home__buttons}>
                <div className={styles.try__button}>
                    <button>
                        Try it free
                    </button>
                </div>
                <div className={styles.intro}>
                    <Link href="/">
                        <a href="#" className={styles.intro__link}>
                            <img src="/images/button-play-icon.svg" className={styles.intro__play__icon} />
                            Play an intro
                            <img src="/images/blue-link-arrow.svg" className={styles.intro__link__icon} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <Menu />
        </>
    )
}

export default hero
