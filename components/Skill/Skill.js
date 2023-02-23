import styles from './Skill.module.css'
import { useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from  'framer-motion'
import useMeasure from 'react-use-measure'

import { VideoFeature } from '../VideoFeature/VideoFeature'

let d = 0.5

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (key.startsWith("_")) return; // Don't compare React's internal props.
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) return;
        seen.add(value);
      }
      return value;
    };
  };

// idea courtesy of sam selikoff - https://github.com/samselikoff/2022-06-09-resizable-panel/commit/fe04a842367657b4acb1058c454d3eca739c419d
function ResizeablePanel({ children }){
    let [ ref, { height }] = useMeasure()
    return (
        <motion.div
            animate={{ height }}
        >
            {/* inner wrapper for content animation */}
            <AnimatePresence mode='wait'>
            <motion.div
                // doesn't rerender for the children, so we need a key that exists outside of the render cycle, that will change and cause an update
                // the most intuitive approach is to use the children themselves as a key
                // we usually get usually due to it being a complex data structure with circular references to itself
                // lets use a work around found in github issues
                key={JSON.stringify(children, ignoreCircularReferences())} // second argument mutates the passed in object
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: d/2, duration: d/2 } }}
                exit={{ opacity: 0, transition: { delay: 0, duration: d/2 } }}
                
            >
                <div ref={ref}>
                    { children }
                </div>
            </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

const Skill = ({language, technologies, methodologies, img, exp, children, show, style, ...props}) => {
    
    const [ open, setOpen ] = useState(false)
    
    return (
        <div className={styles.Skill} style={style} >
            <h1>{language}</h1>

            {/* we don't need the entire div resized, just this section that comes and goes */}
            <motion.img 
                src='/svgs/caret-down.svg'
                className={styles.Caret}
                onClick={() => setOpen(!open)} 
                animate={{ rotate: open ? 180 : 0 }}
            />

            {technologies && <div className={styles.Tech}>
                <p>Technologies</p>
                <div>
                {technologies.map((t, i) => (
                        <span key={t}>{t}{ i != (technologies.length-1) && ' |' }</span>    
                ))}
                </div>
            </div>}

            {methodologies && <div className={styles.Tech}>
                <p>Methodologies</p>
                <div>
                {methodologies.map((t, i) => (
                        <span key={t}>{t}{ i != (methodologies.length-1) && ' |' }</span>    
                ))}
                </div>
            </div>}

            { /* show first child, hide the rest */ }
            { show && show }
            
            <MotionConfig transition={{ duration: d/2 }}>
            <ResizeablePanel>
                { open ? <>
                    { children }
                </> : undefined }
            </ResizeablePanel>
            </MotionConfig>
        </div>
    )
}

export default Skill

