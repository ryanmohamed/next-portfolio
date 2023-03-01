import styles from './SidePanel.module.css'
import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import useMeasure from 'react-use-measure'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function SidePanel ({ children }) {
    const [toggle, setToggle] = useState(false)
    const router = useRouter()
    const isMobile = useMediaQuery({ query: '(max-width: 800px)'})
    let [ ref, { height } ] = useMeasure()

    useEffect(() => {
        !isMobile && setToggle(true)
    }, [isMobile])

    useEffect(() => {
        isMobile && setToggle(false)
    }, [router.pathname])

    return (
        <>
        <div ref={ref} className={styles.SidePanel} style={{ top: toggle ? isMobile ? '0' : 'var(--navheight)' : '-200%', bottom: isMobile ? undefined : '45px' }}>
            {children}
        </div>
        <div className={styles.Burger} 
            onClick={() => setToggle(!toggle) }
            style={{ top: toggle ? isMobile ? `${height}px` : '0' : '0'}}    
        >
            <p> High Level Skills
                <Image src="/svgs/light-caret-down.svg" 
                    width={30}
                    height={30}
                    style={{ transform: toggle ? 'rotate(180deg)' : 'rotate(0deg)'}}
                    alt="caret-down"
                />
            </p>
            <div></div>
            {/* <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </div>
        </>
    )
}