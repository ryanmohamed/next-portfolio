import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar(){
    return <nav className={styles.Navbar}>
        Ryan Mohamed
        <ul className={styles.Links}>
            <li className={styles.Link}><Link href={{ pathname: '/' }}>Home</Link></li>
            <li className={styles.Link}><Link href={{ pathname: '/projects' }} prefetch={true} >Projects</Link></li>
        </ul>
    </nav>
}