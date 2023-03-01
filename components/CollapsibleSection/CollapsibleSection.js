import dynamic from 'next/dynamic'
import { motion, AnimatePresence, MotionConfig } from  'framer-motion'
import useMeasure from 'react-use-measure'
import { useEffect, useRef, useState } from 'react'
import ignoreCircularReferences from '../../lib/ignoreCircularReferences'

const d = 0.5

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
                <div ref={ref} >
                    { children }
                </div>
            </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default function CollapsibleSection({heading, children, className}){
    const [ toggle, setToggle ] = useState(false)
    let [ ref, {width} ] = useMeasure()
    return (
        <motion.section 
            className={className}
        >
            <h2>{heading}</h2>
            <MotionConfig transition={{ duration: d/2 }}>
                <ResizeablePanel>
                    { toggle ? <ul>{children}</ul> : undefined }
                </ResizeablePanel>
            </MotionConfig>
            {/* <motion.p
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                onClick={() => setToggle(!toggle)}>
                { toggle ? 'See less' : 'See more' }
            </motion.p> */}
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2, rotate: 360 }}
                onClick={() => setToggle(!toggle)} 
                src={ toggle ? "/svgs/minus.svg" : "/svgs/plus.svg"}
            />

        </motion.section>
    )
} 