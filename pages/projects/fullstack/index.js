import styles from './fullstack.module.css'
import SkillLayout from "../../../layout/SkillLayout/SkillLayout"
import Petmatcher from '../../../components/Projects/Petmatcher/Petmatcher'

function Fullstack(){


    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>

            <div className={styles.Projects_Container}>
                <h1> Full-stack Development </h1>

                <ul className={styles.Shortcuts}>
                    <li><a href="#petmatcher">project 1</a></li>
                    <li><a>project 2</a></li>
                    <li><a>project 3</a></li>
                </ul>

                <section className={styles.Breakdown}>
                    <section className={styles.Techs}>
                        <h2>Technologies Used: </h2>
                        <ul>
                            <li> Node.js for building RESTful APIs, secured endpoints, and interacting with deployed databases. </li>
                            <li> React.js for building dynamic, responsive, progressive web apps (PWAs) for intuitive client interaction.</li>
                            <li> Next.js for SSR, SEO and multi-page app support. </li>
                            <li> You need more here like docker utilization </li>
                            <li> Tailwind for styling components quickly in Javascript</li>
                            <li> Github and Jira for collabration and working in Teams. </li>
                        </ul>
                    </section> 

                    <section className={styles.Courses}>
                        <h2>Some courses I've taken with relevance to this skill are: </h2>
                        <ul>
                            <li>Internet Web & Technologies with Raymond Law
                                <ul><li>Quick Link to Projects</li></ul>
                            </li>

                            <li>Data Communications with Mahabur Rahman
                                <ul><li>Quick Link to Projects</li></ul>
                            </li>
                        </ul>
                    </section>

                    <section className={styles.Methods}>
                        <h2>Methodologies Used: </h2>
                        <ul>
                            <li>Agile Development</li>
                            <li>Front-end Development</li>
                            <li>Back-end Development</li>
                            <li>REST APIs</li>
                            <li>OAuth 2.0</li>
                            <li>JWT Authetication</li>
                            <li>PWAs</li>
                            <li>TCP / UDP</li>
                            <li>Socket Programming</li>
                            <li>Database Drivers</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </section>
                </section>

                <div className={styles.Projects}>
                    <section id="petmatcher"><Petmatcher /></section>
                </div>


            </div>
            
        </div>
    )
}

Fullstack.pageLayout = SkillLayout
export default Fullstack