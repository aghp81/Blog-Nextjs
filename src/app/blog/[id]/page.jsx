import Image from 'next/image'
import Link from 'next/link'
import natureImage from 'public/stock-photo-142984111.jpg'
import userAvatar from 'public/userAvatar.png'
import styles from './page.module.css'
import {notFound} from "next/navigation"

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
     cache: 'no-store'
    } )

  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1>
              Lorem ipsum dolor sit amet.
            </h1>
            <p className={styles.desc}>
              {data.title}
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

export default BlogPost