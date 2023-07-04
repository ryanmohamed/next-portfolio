// root url of site, as opposed to normal solo react
import styles from '../styles/Home.module.css'
import Link from 'next/link' // as oppossed to a, or react router link

import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'

import TextCarousel from '../components/TextCarousel/TextCarousel'

export default function Home() {
  const [ seen, setSeen ] = useState(false)
  const display = [
    ['Text 1', 'Text 2', 'Text 3'],
    ['Text 4', 'Text 5', 'Text 6'],
    ['Text 7', 'Text 8', 'Text 9'],
    ['Text 10', 'Text 11', 'Text 12'],
  ];
  return (
    <div className={styles.Home}>
    
      <main>
      {/* <div><TextCarousel display={display} duration={2000} /></div> */}
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
