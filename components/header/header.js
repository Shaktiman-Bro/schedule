import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss';

function header() {
    return (
        <header className={styles.header}>
            <div className="logo">
                <img src="/images/fav-icon-product-pages.svg" />
            </div>
            <div className={styles.mobile__menu}>
                <Link href="/">
                    <a className={styles.signin__link}>
                        Sign in
                    </a>
                </Link>
                <Link href="/">
                    <a className={styles.burger}>
                        <span className={styles.burger__lines}></span>
                        <span className={styles.burger__lines}></span>
                        <span className={styles.burger__lines}></span>
                    </a>
                </Link>
            </div>
            <div className={styles.navigation}>
                <nav className={styles.top__menu}>
                    <Link href="/">
                        <a>Company</a>
                    </Link>
                    <Link href="/">
                        <a>Resources</a>
                    </Link>
                    <Link href="/">
                        <a>Contact us</a>
                    </Link>
                    <Link href="/">
                        <a>
                            Sign in
                            <img src="/images/blue-link-arrow.svg" className={styles.signin__link__icon} />
                        </a>
                    </Link>
                </nav>
                <nav className={styles.main__menu}>
                    <Link href="/"><a>Products</a></Link>
                    <Link href="/"><a>Solutions</a></Link>
                    <Link href="/"><a>Pricing</a></Link>
                    <Link href="/"><a>Success stories</a></Link>
                    <Link href="/"><a>Partners</a></Link>
                </nav>

            </div>
        </header>
    )
}

export default header
