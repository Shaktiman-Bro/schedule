import React from 'react'
import Link from 'next/link';
import styles from './footer.module.scss';

function footer() {
    return (
        <div className={styles.footer__container}>
            <footer className={styles.footer}>
                <div className={styles.desktop__menu}>
                    <div className={styles.favicon}>
                        <img src="/images/navigation-fav-icon-blue.svg" />
                    </div>
                    <ul className={styles.mobile__menu}>
                        <li><Link href="/"><a>About Us </a></Link></li>
                        <li><Link href="/"><a>Trust Center </a></Link></li>
                        <li><Link href="/"><a>GDPR Compliance</a></Link></li>
                        <li><Link href="/"><a>Legal Center</a></Link></li>
                        <li><Link href="/"><a>Careers</a></Link></li>
                        <li><Link href="/"><a>Blog</a></Link></li>
                    </ul>
                    <div className={styles.menus}>

                        <ul className={styles.menu}>
                            <li><Link href="/"><a>Products</a></Link></li>
                            <li><Link href="/"><a>ScheduleOnce</a></Link></li>
                            <li><Link href="/"><a>InviteOnce</a></Link></li>
                        </ul>
                        <ul className={styles.menu}>
                            <li><Link href="/"><a>Company</a></Link></li>
                            <li><Link href="/"><a>About Us </a></Link></li>
                            <li><Link href="/"><a>Trust Center </a></Link></li>
                            <li><Link href="/"><a>GDPR Compliance</a></Link></li>
                            <li><Link href="/"><a>Legal Center</a></Link></li>
                            <li><Link href="/"><a>Careers</a></Link></li>
                            <li><Link href="/"><a>Blog</a></Link></li>
                        </ul>

                        <ul className={styles.menu}>
                            <li><Link href="/"><a>Resources</a></Link></li>
                            <li><Link href="/"><a>Success stories</a></Link></li>
                            <li><Link href="/"><a>Support Center</a></Link></li>
                            <li><Link href="/"><a>Video Library</a></Link></li>
                            <li><Link href="/"><a>Webinars</a></Link></li>
                            <li><Link href="/"><a>Partners</a></Link></li>
                            <li><Link href="/"><a>System status</a></Link></li>
                            <li><Link href="/"><a>Developers</a></Link></li>
                        </ul>
                    </div>
                    
                    <div className={styles.contact}>
                        <div className={styles.contact__call}>
                            <h5 className={styles.contact__call__title}>Call Us</h5>
                            <span>+1 650-206-5585</span>
                            <span><b>US: </b>800-505-5257</span>
                        </div>
                        <div className={styles.contact__email}>
                            <h5 className={styles.contact__email__title}>Email Us</h5>
                            <span className={styles.contact__email__text}>contact@scheduleonce.com</span>
                        </div>
                    </div>
                </div>

                <div className={styles.links}>
                    <span className={styles.copyright}>
                        © Copyright ScheduleOnce 2018. All rights reserved.
                    </span>
                    <Link href="/"><a className={styles.links__link}>Master service agreement</a></Link>
                    <Link href="/"><a className={styles.links__link}>Application privacy policy</a></Link>
                    <Link href="/"><a className={styles.links__link}>Website terms of use</a></Link>
                    <Link href="/"><a className={styles.links__link}>Website privacy policy</a></Link>
                </div>
            </footer>
        </div>
    )
}

export default footer
