import styles from './page.module.css'


export default function Layout({ children, ...props }: any) {
  return (
      <div>
        <h1 className={styles.mainTitle} {...props}>Our Works</h1>
        {children}
      </div>
  )
}
