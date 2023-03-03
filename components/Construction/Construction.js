import styles from './Construction.module.css'
import Image from 'next/image'
import constructionGif from '../../public/imgs/construction.gif'
export default function Construction ({}) {
    return (
        <div className={styles.Construction}>
            <Image src={constructionGif} alt="construction" height={250} width={250}/>
            <h1>Page under construction! 🚧</h1>
            <p>Make sure to check back soon!</p>
            <p>Updates daily.</p>
        </div>
    )
}