"use client"

import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

import styles from './navbar.module.css'



const link = [
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"Portfolio",
        url:"/portfolio",
    },
    {
        id:3,
        title:"Blog",
        url:"/blog",
    },
    {
        id:4,
        title:"About",
        url:"/about",
    },
    {
        id:5,
        title:"Contact",
        url:"/contact",
    },
    {
        id:6,
        title:"Dashboard",
        url:"/dashboard",
    },
];

export default function Navbar() {
  return (
    
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <span className={styles.alogo}>A</span>
                <span className={styles.ghlogo}>GH</span>
                <span className={styles.plogo}>P</span>
            </Link>
        
            <div className={styles.links}>
                <DarkModeToggle />
                {link.map(link=>(
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}

                <button
                    className={styles.logout}
                    onClick={()=>{console.log("loged out")}}>
                        Logout
                </button>

            </div> 
        </div>
    
  )
}
