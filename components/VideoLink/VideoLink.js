import { useEffect, useState } from "react"
import styles from './VideoLink.module.css'
import useMeasure from 'react-use-measure'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export const VideoLink = ({ style, title, src, href,...props }) => {
    const [over, setOver] = useState(false)
    let [ref, {width, height}] = useMeasure()

    return (
        <div className={styles.VideoLinkContainer} style={style}>
            <LazyLoadComponent threshold={10} effec>
            <video
                ref={ref} 
                style={{ cursor: 'pointer', borderRadius: '0.5rem' }}
                onMouseOver={(e) => setOver(true)}
                onMouseOut={(e) => setOver(false)}
                autoPlay muted loop playsInline preload="none" width="100%">
                <source src={src} type="video/mp4" />
            </video>
            </LazyLoadComponent>
            <a 
                style={{ width: `${Math.ceil(width)}px`, height: `${Math.ceil(height)}px` }}
                className={styles.Cover}
                href={href}
                target="_blank"
            >
                Take me to {title}
                <img src="/svgs/external-link.svg" />
            </a>
        </div>
    )
}