import { useState } from 'react'
import { VideoLink } from "../VideoLink/VideoLink"
import { AnimatePresence, motion } from 'framer-motion'
import styles from './VideoFeature.module.css'
import useMeasure from 'react-use-measure'
import Image from 'next/image'

import CodeSnippet from '../CodeSnippet/CodeSnippet'

export const VideoFeature = (props) => {
    const { children, title, github, notable, tags, filename, codeSnippet, language, noVideo, noLink } = props
    const [ code, setCode ] = useState("closed")
    const [ style, setStyle ] = useState(null)
    let [ ref, {width, height} ] = useMeasure()
    

    const flipCode = () => {
        setCode(code === "open" ? "closed" : "open")
    }

    const notCode = () => { 
        return code === "open" ? "closed" : "open"
    }

    const variants = {
        open: { rotateY: 180, opacity: 0, visibility: 'hidden' },
        closed: { rotateY: 0, opacity: 1, visibility: 'visible'}
    }
    return (
        <motion.div
            className={styles.VideoFeatureContainer}
        >
            
        { codeSnippet && <Image src={`/svgs/${code !== 'open' ? 'code' : 'back' }.svg`} 
            alt="expand"
            width={50}
            height={50}
            onClick={() => flipCode()} 
        />}

        <AnimatePresence mode='wait'>
            { codeSnippet && <CodeSnippet 
                key={'snippet'}
                language={language} 
                animate={notCode(code)}
                variants={variants}
                cpyHeight={height}
                snippet={codeSnippet}
                filename={filename}
            /> }

            <motion.div 
                animate={code}
                key={'main'}
                variants={variants}
                className={styles.VideoFeature}
                ref={ref}
            >
                <div className={styles.TitleContainer}>
                    <h1>{title}</h1>
                    {notable && <div>
                        <Image src="/svgs/notable.svg" alt="notable project" width={50} height={50}/>
                        <div className={styles.ToolTip}>Completed & notable project</div>
                    </div>}
                </div>
                
                { children }

                { !noVideo && <VideoLink noLink={noLink} {...props} style={{ margin: '10px 0' }}/> }
                
                <motion.a 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgb(34 197 94)', boxShadow: '2px 3px 4px rgba(0,0,0,0.3)' }}
                    whileTap={{ scale: 1.2, backgroundColor: 'rgb(34 197 94)' }}
                    mode="wait"
                    href={github} 
                    target="_blank"
                >
                    <Image src="/svgs/github.svg" alt="github button" width={50} height={50}/>
                </motion.a>

                {tags && <div className={styles.Tags}>
                    <span>Tags:</span>
                    <div>
                        {tags.map(tag => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>}
            </motion.div>
        </AnimatePresence>
            

        </motion.div>
    )
}