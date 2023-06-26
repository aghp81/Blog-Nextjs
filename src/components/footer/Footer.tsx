import Image from 'next/image'

import style from '../../app/page.module.css'

import styles from './footer.module.css'

export default function Footer() {
  return (
    
      <div className={styles.container}>
        <div > 2023 Abol Ghana. All Right Reserved.  </div>
        <div>
            <Image src="/Instagram.png"  width={15} height={15} alt="Aghp"  />
            <Image src="/Instagram.png"  width={15} height={15} alt="Aghp"  />
            <Image src="/Instagram.png"  width={15} height={15} alt="Aghp"  />
            <Image src="/Instagram.png"  width={15} height={15} alt="Aghp"  />
        </div>
          
      </div>
      
      
    
  )
}
