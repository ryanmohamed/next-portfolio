import { useState, useEffect } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'

function Petmatcher(){

    // fetch the contents of each of the public files
    const [petmatcher_doc, set_petmatcher_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/petmatcher_auth_js.txt').then(r => r.text()).then(text => set_petmatcher_doc(text))
        console.log(petmatcher_doc)
    }, [])

    return (
        <VideoFeature title="Petmatcher" 
            src="/vids/Petmatcher_Demo.mp4"
            href="https://petmatcher.netlify.app" 
            github="https://github.com/ryanmohamed/pandagum-client"
            notable={true}
            tags={['fullstack', 'front-end', 'back-end', 'node.js', 'react.js', 'mysql', 'jwt authentication', 'restful api', 'socket programming', 'relational data modeling']}
            filename={'auth.js'}
            codeSnippet={`${petmatcher_doc}`}
            language={'js'}
        >
            <p>Petmatcher is a <span className='emphasize'>scalable</span> and <span className='emphasize'>authenticated</span> full-stack web app, aimed towards family, friends, or couples looking to find their ideal pet in a pleasant interactive pair up. </p>
            <p>Petmatcher was created using <span className='emphasize'>Node.js</span>, <span className='emphasize'>React</span> and <span className='emphasize'>SQL</span>. It implements a pair-up system of rooms, where users synchronously answer prompts, providing keywords for image generation. </p>
        
        </VideoFeature>
    )

}

export default Petmatcher