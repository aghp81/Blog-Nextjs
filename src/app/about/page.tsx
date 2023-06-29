import Button from '@/components/Button/Button'
import Image from 'next/image'

import style from '../page.module.css'
import styles from './page.module.css'

export default function About() {
  return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
          src="https://www.monash.edu/__data/assets/image/0020/3214271/Banner_LearnDigitalStorytelling.jpg" 
          fill={true} 
          alt=""  
          className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
            <h2 className={styles.imgDesc}>Handcrafting award winning digital experinces</h2>
          </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto quae cumque quo quibusdam
              <br />
              <br />
              corporis omnis fugit reiciendis placeat? Adipisci nesciunt ab tempora neque beatae laudantium nobis quibusdam officiis. Placeat?
              </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est animi totam quia eaque similique id quidem, doloribus eius itaque quam debitis
              <br />
              <br />
              voluptatem blanditiis aut labore laboriosam quibusdam ratione exercitationem cumque.
            </p>
            <Button url="/contact" text="Contact" />
          </div>
        </div>
        
      </div>
  )
}
