import Image from 'next/image'

import style from '../page.module.css'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={style.main}>
      <div className={styles.container}>درباره ما</div>
    </main>
  )
}
