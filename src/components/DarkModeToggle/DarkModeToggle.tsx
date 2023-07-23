import styles from './DarkModeToggle.module.css'

export default function DarkModeToggle() {

    const mode : string = "light";
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌕</div>
            <div className={styles.ball} 
            style={mode === "light" ? { left:"2px" } : { right:"2px" }} />
        </div>
    )
  }
  