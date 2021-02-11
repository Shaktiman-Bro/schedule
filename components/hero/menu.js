import React from 'react';
import Link from 'next/link';
import styles from './menu.module.scss'

function menu() {
    return (
        <div className={styles.menu__container}>
            <ul className={styles.menu}>
                <li className={styles.links}>
                    <Link href="/"><a>
                        Features
                    </a></Link>
                </li>
                <li className={styles.links}>
                    <Link href="/"><a>
                        Integrations
                    </a></Link>
                </li>
                <li className={styles.links}>
                    <Link href="/"><a>
                        Pricing
                    </a></Link>
                </li>
                <li className={styles.links}>
                    <Link href="/"><a>
                        Request a demo
                    </a></Link>
                </li>
                <li className={styles.trial__button}>
                    <Link href="/"><a>
                        Free Trial
                    </a></Link>
                </li>
            </ul>
        </div>
    )
}

export default menu
