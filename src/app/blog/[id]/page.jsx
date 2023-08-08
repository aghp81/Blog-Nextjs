import Image from 'next/image'
import Link from 'next/link'
import natureImage from 'public/stock-photo-142984111.jpg'
import userAvatar from 'public/userAvatar.png'

import styles from './page.module.css'


export default function BlogPost() {
  return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1>
              Lorem ipsum dolor sit amet.
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptates necessitatibus dolorem esse culpa minus? Hic enim, harum, animi nesciunt soluta nam suscipit, eveniet recusandae alias architecto deleniti laudantium mollitia.
            </p>
            <div className={styles.author}>
              <Image 
                src={userAvatar}
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>Abol Ghana</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image 
                src={natureImage}
                alt=""
                fill={true}
                className={styles.image}
              />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis earum perferendis delectus laborum. Dicta eveniet, impedit reiciendis
            <br  /> nemo dolor commodi perferendis sequi! Consequuntur fuga harum earum, nemo rerum animi dicta.
          </p>
        </div>
        
      </div>
  )
}
