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
          <p>Navigate with high-level <span>skill links</span> for a quick analysis of my past projects.</p>
        </header>

        <main>
          <ul>
            <h3><span>Languages</span> I&apos;m proficient with are:</h3>
            <div>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>Ruby</li>
            </div>
          </ul>

          <ul>
            <h3><span>Technologies</span> I&apos;m familar with are:</h3>
            <div>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>Express</li>
              <li>Sinatra</li>
              <li>Firebase</li>
              <li>Google Cloud Platform</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>MySQL</li>
              <li>Microsoft SQL Server</li>
              <li>PostgreSQL</li>
              <li>Prisma</li>
              <li>Sequelize</li>
              <li>JIRA</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>UNIX</li>
              <li>Linux</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Jest</li>
              <li>Cucumber</li>
              <li>Cypress</li>
              <li>Redis</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Adobe Photoshop</li>
            </div>
          </ul>
          
          <ul>
            <h3><span>Methodologies</span> I strive to implement and abide by:</h3>
            <div>
            <li>Full-stack Development</li>
            <li>Front-end</li>
            <li>Back-end</li>
            <li>System Design</li>
            <li>MVC</li>
            <li>RPC</li>
            <li>RESTful APIs</li>
            <li>JWT Authentication</li>
            <li>OAuth</li>
            <li>SSR</li>
            <li>JSON</li>
            <li>Load Balancing</li>
            <li>RDBMS</li>
            <li>NoSQL</li>
            <li>ORM</li>
            <li>UX/UI</li>
            <li>Responsive Web Design</li>
            <li>OOP</li>
            <li>Version Control</li>
            <li>Agile</li>
            <li>Waterfall</li>
            <li>CI/CD</li>
            <li>TDD</li>
            <li>Unit Testing</li>
            <li>Integration Testing</li>
            <li>E2E Testing</li>
            <li>WebSockets</li>
            <li>TCP</li>
            <li>HTTP/HTTPS</li>
            <li>Cloud Computing</li>
            <li>Data Modeling</li>
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