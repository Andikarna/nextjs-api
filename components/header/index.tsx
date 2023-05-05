import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
        <ul className={styles.col}>
          <li className={styles.list}>
            <Link href="/" className={styles.link}>Home</Link>
          </li>
          <li className={styles.list}>
            <Link href="/blog" className={styles.link}>Blog</Link>
          </li>
          <li className={styles.list}>
            <Link href="/users/user" className={styles.link}>Users</Link>
          </li>
        </ul>
      </header>
  )
}
