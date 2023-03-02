import { Children, useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import styles from './FScreenModal.module.css'
import Image from 'next/image';
import close from '../../public/svgs/close.svg'
import ScrollContainer from "react-indiana-drag-scroll";

export default function FScreenModal({ src, toggle, setToggle, children }) {
  const { scrollY } = useScroll()
  return (
    <AnimatePresence>
    { toggle && <motion.main 
      className={styles.FScreenModal}
      initial={{ scale: 0, opacity: 0  }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <Image src={close} alt="close icon" onClick={() => setToggle(false)} />
      <div>
        <ScrollContainer>
          { children }
        </ScrollContainer>
      </div>
    </motion.main> }
    </AnimatePresence>
  )
}
