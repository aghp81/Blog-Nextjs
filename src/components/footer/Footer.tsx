import Image from 'next/image'

import style from '../../app/page.module.css'

import styles from './footer.module.css'

export default function Footer() {
  return (
    
      <div className={styles.container}>
        <div > 2023 Abol Ghana. All Right Reserved.  </div>
        <div className={styles.social}>
            <Image src="/Instagram.png"  width={15} height={15} className={styles.icon} alt="Aghp Instagram"  />
            <Image src="/telegram.png"  width={15} height={15} className={styles.icon} alt="Aghp telegram"  />
            <Image src="/linkedin.png"  width={15} height={15} className={styles.icon} alt="Aghp linkedin"  />
            <Image src="/twitter2.png"  width={15} height={15} className={styles.icon} alt="Aghp twitter"  />
        </div>
          
      </div>
      
      
    
  )
}
