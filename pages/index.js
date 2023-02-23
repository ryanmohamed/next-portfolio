// root url of site, as opposed to normal solo react
import styles from '../styles/Home.module.css'
import Link from 'next/link' // as oppossed to a, or react router link

import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'


export default function Home() {
  const [ seen, setSeen ] = useState(false)

  return (
    <div className={styles.Home}>

      <main>
        <motion.div
          className={styles.Name}
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1.3
          }}
        >
          <p>RYAN</p>
          <p>MOHAMED</p>
        </motion.div>

        <input type="search" />

      </main>

    </div>
  )
}
