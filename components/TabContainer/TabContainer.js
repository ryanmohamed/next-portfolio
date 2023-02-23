import react, { useState, useEffect } from 'react'
import styles from '../../styles/TabContainer.module.css'

import { motion, Reorder, AnimatePresence } from 'framer-motion'

import { Tab } from '../Tab/Tab'
import { languages } from '../../lib/languages'

export default function TabContainer(props){
    const [ tabs, setTabs ] = useState([1, 2, 3, 4, 5])
    const [ selected, setSelected ] = useState(1)
    const getLang = (i) => { return languages.find((l) => l.id == i) }
    
    useEffect(() => {
        console.log(selected)
    }, [selected])

    return (
        <>
        <Reorder.Group axis='x' as='ul' values={tabs} onReorder={setTabs} className={styles.TabContainer}>
            {tabs.map( (tab) => (
                <Tab 
                    onClick={ () => { setSelected(tab)} }
                    key={tab} 
                    value={tab} 
                    lang={ getLang(tab).lang } 
                    color={ getLang(tab).color } />
            ))}
        </Reorder.Group>
        
        <AnimatePresence>
        {tabs.map( tab => (
            <motion.div 
                key={tab}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}} 
                className={styles.Panel} 
                style={{ 
                    backgroundColor: getLang(tab).color, 
                    zIndex: tab === selected ? 2 : 1 }}
            >

            </motion.div>
        ))}
        </AnimatePresence>

        </>
    )
}
