import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.hdr}>
        <h3 className={styles.logo}>Sherians</h3>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default header