import Button from '@/components/Button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import Mojassame from 'public/mojassame.jpg';


export default function Category({params}) {
  console.log(params)
  return (
      <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nam cumque praesentium consequuntur. Et officiis esse sint fugit ipsam rem, minus, aperiam adipisci ipsum nesciunt debitis odit a. Omnis, delectus!</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img} 
            fill={true}
            src={Mojassame}
            alt=""   />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nam cumque praesentium consequuntur. Et officiis esse sint fugit ipsam rem, minus, aperiam adipisci ipsum nesciunt debitis odit a. Omnis, delectus!</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img} 
            fill={true}
            src={Mojassame}
            alt=""   />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nam cumque praesentium consequuntur. Et officiis esse sint fugit ipsam rem, minus, aperiam adipisci ipsum nesciunt debitis odit a. Omnis, delectus!</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img} 
            fill={true}
            src={Mojassame}
            alt=""   />
          </div>
        </div>

      </div>
  )
}
