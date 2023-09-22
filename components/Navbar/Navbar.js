import Link from 'next/link'
import styles from './Navbar.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navbar(){
    const router = useRouter()
    const [ isHome, setIsHome ] = useState(true)
    useEffect(() => {
        router.pathname === '/' ? setIsHome(true) : setIsHome(false)
    }, [router.pathname])
    return <nav className={styles.Navbar}>
        Ryan Mohamed
        <ul className={styles.Links}>
            <li className={styles.Link}><Link href={{ pathname: '/' }}>Home</Link></li>
            <li className={styles.Link}><Link href={{ pathname: `/resume/RyanMohamedCV.pdf` }} target="_blank" referrer="noopener noreferrer" download={true}>Resume</Link></li>
            {/* <li className={styles.Link}><Link href={{ pathname: '/blog' }}>Blog</Link></li> */}
            <li className={styles.Link}>
                <Link href={{ pathname: '/projects' }}>
                    Projects
                </Link>
                { isHome && <Image src="/svgs/click.svg" alt="click above" height={50} width={50} /> }
            </li>

        </ul>
    </nav>
}
