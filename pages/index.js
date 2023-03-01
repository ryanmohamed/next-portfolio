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
        
        <h1>Hello there! ✌️</h1>
        <h3>While this site in under construction... 🚧</h3>
        <h3>Please take the time to look around!</h3>

        <blockquote>
          <p>This portfolio is <i>currently</i> primarily made using <motion.span>Next</motion.span>, <motion.span>React</motion.span>, <motion.span>CSS</motion.span>.</p>

          <p>With <motion.span>Framer Motion</motion.span> for animation.</p>
        </blockquote>

      </main>

    </div>
  )
}
