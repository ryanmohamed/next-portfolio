import react from 'react'
import styles from '../../styles/Tab.module.css'

import { Reorder } from 'framer-motion'

export const Tab = ({value, lang, color, onClick}) => {
    return (
        <Reorder.Item 
            onClick={onClick}
            onDrag={onClick}
            value={value} 
            className={styles.Tab} 
            style={{ backgroundColor: color }} 
        >
            <p>{lang && lang}</p>
        </Reorder.Item>
    )
}