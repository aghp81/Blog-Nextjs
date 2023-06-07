import Link from 'next/link';

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
    
    <ul>
        <li>
            <Link href="/">لوگو</Link>
        </li>
        <div>
            {link.map(link=>(
                <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
        </div>
  </ul>
    
  )
}
