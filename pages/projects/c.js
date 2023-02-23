import styles from './Projects.module.css'
import SkillLayout from "../../layout/SkillLayout/SkillLayout"
import Skill from '../../components/Skill/Skill'
import { VideoFeature } from '../../components/VideoFeature/VideoFeature'

const js = {
    language: 'JavaScript',
    technologies: ['React.js', 'Node.js'],
    methodologies: ['OAuth 2.0', 'JWT', 'SSR', 'REST APIs', '...'],
    exp: [3, 4]
}

function C(){
    return (
        <div className={styles.ProjectsPage} style={{ 'position': 'relative' }}>

            <h1 style={{ z: '10' }}>c/c++</h1>
            <Skill {...js} show={
        <VideoFeature title="Petmatcher" 
            src="/vids/Petmatcher_Demo.mp4"
            href="https://petmatcher.netlify.app" 
            github="https://github.com/ryanmohamed/pandagum-client"
            notable={true}
            tags={['fullstack', 'front-end', 'back-end', 'node.js', 'react.js', 'mysql', 'jwt authentication', 'restful api']}
            filename={'auth.js'}
        >
            <p>Petmatcher is a <span className='emphasize'>scalable</span> and <span className='emphasize'>authenticated</span> full-stack web app, aimed towards family, friends, or couples looking to find their ideal pet in a pleasant interactive pair up. </p>
            <p>Petmatcher was created using <span className='emphasize'>Node.js</span>, <span className='emphasize'>React</span> and <span className='emphasize'>SQL</span>. It implements a pair-up system of rooms, where users synchronously answer prompts, providing keywords for image generation. </p>
        </VideoFeature>
      }
      >

        <VideoFeature title="Petmatcher" 
            src="/vids/Petmatcher_Demo.mp4"
            href="https://petmatcher.netlify.app" 
            github="https://github.com/ryanmohamed/pandagum-client"
            notable={true}
            tags={['fullstack', 'front-end', 'back-end', 'node.js', 'react.js', 'mysql', 'jwt authentication', 'restful api']}
            noVideo={true}
        >
            <p>Petmatcher is a <span className='emphasize'>scalable</span> and <span className='emphasize'>authenticated</span> full-stack web app, aimed towards family, friends, or couples looking to find their ideal pet in a pleasant interactive pair up. </p>
            <p>Petmatcher was created using <span className='emphasize'>Node.js</span>, <span className='emphasize'>React</span> and <span className='emphasize'>SQL</span>. It implements a pair-up system of rooms, where users synchronously answer prompts, providing keywords for image generation. </p>
        </VideoFeature>

        <p> extras </p>

      </Skill>

        </div>
    )
}

C.pageLayout = SkillLayout
export default C