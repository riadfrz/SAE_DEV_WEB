import React from 'react'
import Logo from '../../images/logo.jpg'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <img src={Logo} alt="" />
            
        </div>
    </div>
  );
}

export default Footer