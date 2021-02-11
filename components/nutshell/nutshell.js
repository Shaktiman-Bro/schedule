import React from 'react'
import styles from './nutshell.module.scss'

function nutshell() {
    return (
        <div className={styles.nutshell}>
            <h2 className={styles.nutshell__title}>ScheduleOnce in nutshell</h2>
            <div className={styles.cards}>
                <div className={styles.cards__inner}>
                    <div className={styles.cards__inner__icon}>
                        <img src="/images/build-your-scenario-icon.svg" />
                    </div>
                    <h3 className={styles.cards__inner__title}>
                        Build your scenario
                    </h3>
                    <span className={styles.cards__inner__subtitle}>
                        Set up your organization’s scheduling scenarios once and your team is ready to accept bookings.
                    </span>
                </div>
                <div className={styles.cards__inner}>
                    <img src="/images/share-your-publish-icon.svg" />
                    <h3>
                        Share your publish
                    </h3>
                    <span>
                        Promote your team’s pages on your website and in your email marketing campaigns.
                    </span>
                </div>
                <div className={styles.cards__inner}>
                    <img src="/images/recieve-bookings-icon.svg" />
                    <h3>
                        Recieve bookings
                    </h3>
                    <span>
                        Sit back and watch bookings fly in to your team member’s calendars.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default nutshell
