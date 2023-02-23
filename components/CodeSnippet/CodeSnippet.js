import styles from './CodeSnippet.module.css'
import { motion } from 'framer-motion'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'

import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-dark'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('python', python)

export default function CodeSnippet({ language, filename, snippet, animate, variants, cpyHeight, ...props }) {
    return (
        <motion.div 
            animate={animate}
            variants={variants}
            className={styles.Code}
            style={{ height: `${Math.ceil(cpyHeight)}px`}}
        >
            <span>{filename}</span>
            <SyntaxHighlighter language={language} style={dark} customStyle={styles.Custom}>
                { snippet && `${snippet}` }
            </SyntaxHighlighter>

        </motion.div>
    )
}