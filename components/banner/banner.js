import React from 'react'
import Menu from '../hero/menu';
import styles from './banner.module.scss'

function banner() {
    return (
        <>
            <div className={styles.banner}>
                {/* <img src="/images/so-banner-element.svg" /> */}
            </div>
            <Menu />
        </>
    )
}

export default banner
