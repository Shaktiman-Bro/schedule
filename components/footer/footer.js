import React from 'react'
import styles from './footer.module.scss';

function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.favicon}>
                <img src="/images/blue-fav-icon.svg" />
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
{/* 
            <div className="social">
                <a>
                    <img src="" />
                </a>
                <a>
                    <img src="" />
                </a>
                <a>
                    <img src="" />
                </a>
                <a>
                    <img src="" />
                </a>
                <a>
                    <img src="" />
                </a>
            </div> */}

            <p className={styles.copyright}>
                © Copyright ScheduleOnce 2018. All rights reserved.
            </p>
            <div className={styles.links}>
                <a className={styles.links__link}>Master service agreement</a>
                <a className={styles.links__link}>Application privacy policy</a>
                <a className={styles.links__link}>Website terms of use</a>
                <a className={styles.links__link}>Website privacy policy</a>
            </div>
        </footer>
    )
}

export default footer
