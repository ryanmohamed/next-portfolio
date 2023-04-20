import styles from './CodeSnippet.module.css'
import { motion } from 'framer-motion'
import { useScrollContainer } from 'react-indiana-drag-scroll';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'
import ruby from 'react-syntax-highlighter/dist/cjs/languages/prism/ruby'

import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('ruby', ruby)

const options = {
    onScroll: () => {},
    onEndScroll: () => {},
    onStartScroll: () => {},
    mouseScroll: {
        rubberBand: true
    }
}

export default function CodeSnippet({ language, filename, snippet, animate, variants, cpyHeight, ...props }) {
    const scrollContainer = useScrollContainer(options)
    const scrollContainer2 = useScrollContainer(options)
    return (
        <motion.div 
            animate={animate}
            variants={variants}
            className={styles.Code}
            style={{ height: `${Math.ceil(cpyHeight)}px`}}
            ref={scrollContainer.ref}
        >
            <span>{filename}</span>
            <SyntaxHighlighter language={language} style={dark} customStyle={styles.Custom}>
                { snippet && `${snippet}` }
            </SyntaxHighlighter>
        </motion.div>
    )
}