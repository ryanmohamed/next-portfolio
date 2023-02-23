import Link from 'next/link' // as oppossed to a, or react router link
import { useState, useEffect } from 'react'
import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import SkillLayout from '../../layout/SkillLayout/SkillLayout'
import { useMediaQuery } from 'react-responsive'

const js = {
  language: 'JavaScript',
  technologies: ['React.js', 'Node.js'],
  methodologies: ['OAuth 2.0', 'JWT', 'SSR', 'REST APIs', '...'],
  exp: [3, 4]
}

const sql = {
  language: 'SQL',
  technologies: ['Docker', 'SMSS', 'T-SQL', 'MySQL'],
  methodologies: ['RDBMS', '...'],
  exp: [2, 4]
}

const python = {
  language: 'Python',
  technologies: ['Tensorflow', 'Numpy'],
  methodologies: ['...'],
  exp: [2, 3.5]
}

export default function Projects({ Component, pageProps }) {

  // fetch the contents of each of the public files
  const [unet_doc, set_unet_doc] = useState(undefined)
  const [petmatcer_doc, set_petmatcher_doc] = useState(undefined)

  // go fetch the files and load them in
  useEffect(() => {
    fetch('./snippets/unet.txt').then(r => r.text()).then(text => set_unet_doc(text))
    fetch('./snippets/petmatcher_auth_js.txt').then(r => r.text()).then(text => set_petmatcher_doc(text))
  }, [])

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

  return (
    <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>

      <div className={styles.Projects_Container} >
        
        <header>
          <h1>Welcome to the Projects and Skills Page 👋</h1>
          <p>Navigate with high-level <span>skill links</span> to the left for a quick analysis of my past projects.</p>
        </header>

        <main>
          <ul>
            <h3><span>Languages</span> I'm proficient with are:</h3>
            <div>
              <li>Javascript</li>
              <li>SQL / T-SQL</li>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
            </div>
          </ul>

          <ul>
            <h3><span>Technologies</span> I'm familar with are:</h3>
            <div>
              <li>React</li>
              <li>Node</li>
              <li>Next</li>
              <li>SMSS</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Github</li>
              <li>Jira</li>
              <li>Figma</li>
              <li>Azure Data Studio</li>
            </div>
          </ul>
          
          <ul>
            <h3><span>Methodologies</span> I strive to implement and abide by:</h3>
            <div>
              <li>Full-stack Development</li>
              <li>OAuth 2.0</li>
              <li>JWT Authetication</li>
              <li>Scalability</li>
              <li>SSR</li>
              <li>UI/UX</li>
              <li>Agile Method</li>
              <li>Waterfall</li>
              <li>CI/CD</li>
              <li>Responsive Web Design</li>
              <li>OOP</li>
              <li>RAII</li>
              <li>Relational Data Modeling</li>
              <li>Efficiency through DS</li>
            </div>
          </ul>
          
          <div className={styles.QuickLinks}>
            {/* <p>Open my <span className={styles.Shiny}>Github</span> and <span className={styles.Shiny}>LinkedIn</span> in another tab 🧐</p> */}
            <motion.a whileHover={{ scale: 1.15 }} style={{ backgroundImage: 'url(/svgs/github2.svg)', backgroundColor: 'rgb(35, 35, 35)' }} href="https://www.github.com/ryanmohamed" target="_blank">Find my <span style={{color: 'var(--main-txt)'}}>Github</span> here.</motion.a>
            <motion.a whileHover={{ scale: 1.15 }} style={{ backgroundImage: 'url(/svgs/linkedin.svg)', backgroundColor: '#4f75e9' }} href="https://www.linkedin.com/in/ryan-mohamed-41a253189/" target="_blank">And my <span style={{color: 'var(--main-txt)'}}>LinkedIn</span> here.</motion.a>
          </div>
        </main>

      </div>
      

    </div>
  )
}

Projects.pageLayout = SkillLayout