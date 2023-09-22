import styles from './fullstack.module.css'
import SkillLayout from "../../../layout/SkillLayout/SkillLayout"
import { motion } from 'framer-motion'

import CollapsibleSection from '../../../components/CollapsibleSection/CollapsibleSection'
import Petmatcher from '../../../components/Projects/Petmatcher/Petmatcher'
import GoogleBlogger from '../../../components/Projects/GoogleBlogger/GoogleBlogger'
import NextBlog from '../../../components/Projects/NextBlog/NextBlog'
import Student from '../../../components/Projects/Student/Student'
import Quizitiv from '../../../components/Projects/Quizitiv/Quizitiv'
import RestaurantRodeo from '../../../components/Projects/RestaurantRodeo/RestaurantRodeo'
import StripeOpenAI from '../../../components/Projects/StripeOpenAI/StripeOpenAI'
import Fitbyte from '../../../components/Projects/Fitbyte/Fitbyte'
import AfterSchoolStartup from '../../../components/Projects/AfterSchoolStartup/AfterSchoolStartup'

function Fullstack(){


    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>

            <div className={styles.Projects_Container}>
                <h1> Full-stack Development</h1>
                <ul className={styles.Shortcuts}>
                    {/* <div className={styles.Wave}>
                        <img className={styles.top} src="/svgs/waves-top.svg"/>
                        <img className={styles.bot} src="/svgs/waves-bot.svg"/>
                    </div> */}
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#afterschoolstartup">After School Startup</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#fitbyte">Fitbyte</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#stripeopenai">Team AI Generation</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#rodeo">Restaurant Rodeo</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#quizitiv">Quizitiv</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#petmatcher">Petmatcher</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#student">Student++</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#googleblogger">Google Blogger API + OAuth 2.0</a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}><a href="#nextblog">Next.js / Firebase Music Blog</a></motion.li>
                </ul>

                <section className={styles.Breakdown}>
                    <CollapsibleSection heading="Technologies Used:" className={styles.Techs}>
                        <li> <span>Node.js</span> for building <span>REST APIs</span>, <span>secured endpoints</span>, and interacting with deployed <span>databases</span>. </li>
                        <li> <span>React.js</span> for building <span>dynamic</span>, <span>responsive</span>, client side designs, for intuitive client interaction.</li>
                        <li> <span>Next.js</span> for <span>SSR</span>, <span>SEO</span> and <span>multi-page app</span> support. </li>
                        <li> You need more here like docker utilization. </li>
                        <li> <span>Tailwind</span> for quickly implementing beautiful <span>CSS</span>.</li>
                        <li> <span>Github</span> and <span>Jira</span> for collabration and working in <span>Teams</span>. </li>
                    </CollapsibleSection>

                    <CollapsibleSection heading="Courses taken relevant to this skill: " className={styles.Courses}>
                        <li>
                            <i>Internet Web & Technologies</i> w/ Raymond Law
                            <div> 
                                <p>Back-end Development</p>
                                <p>Node.js</p>
                                <p>TCP/UDP</p>
                                <p>HTTP/HTTPS</p>
                                <p>REST APIs</p>
                                <p>OAuth 2.0</p>
                            </div>   
                        </li>

                        <li>
                            <i>Data Communications</i> w/ Mahabur Rahman
                            <div> 
                                <p>CI/CD</p>
                                <p>Front-end Development</p>
                                <p>Back-end Development</p>
                                <p>React.js</p>
                                <p>Node.js</p>
                                <p>TCP/UDP</p>
                                <p>HTTP/HTTPS</p>
                                <p>REST APIs</p>
                                <p>Socket Programming</p>
                                <p>JWT Authentication</p>
                            </div>  
                        </li>
                    </CollapsibleSection>

                </section>

                <div className={styles.Projects}>
                    <section id="afterschoolstartup"><AfterSchoolStartup /></section>
                    <section id="fitbyte"><Fitbyte /></section>
                    <section id="stripeopenai"><StripeOpenAI /></section>
                    <section id="rodeo"><RestaurantRodeo /></section>
                    <section id="quizitiv"><Quizitiv /></section>
                    <section id="petmatcher"><Petmatcher /></section>
                    <section id="student"><Student /></section>
                    <section id="googleblogger"><GoogleBlogger /></section>
                    <section id="nextblog"><NextBlog /></section>
                </div>


            </div>
            
        </div>
    )
}

Fullstack.pageLayout = SkillLayout
export default Fullstack