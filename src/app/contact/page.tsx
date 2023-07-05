import Button from '@/components/Button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import Cimage from 'public/Contact.png'


export default function Contact() {
  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Let's Keep In Touch </h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
            src={Cimage}
            alt=""
            fill={true}
            className={styles.image}
            />
          </div>
          <form className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="email" className={styles.input} />
            <textarea 
            className={styles.textArea} 
            cols="30"
            rows="10"
            placeholder="message" ></textarea>
            <Button url="#" text="send" />
          </form>
        </div>
      </div>
  )
}
