"use client"

import styles from '../../../../app/page.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <button onClick={() => signIn("google")}>ورود با گوگل</button>
    </div>
  )
}
