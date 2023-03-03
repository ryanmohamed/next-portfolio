import { useState, useEffect } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'

function NextBlog(){

    // fetch the contents of each of the public files
    const [nextblog_doc, set_nextblog_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/nextblog.txt').then(r => r.text()).then(text => set_nextblog_doc(text))
        console.log(nextblog_doc)
    }, [])

    return (
        <VideoFeature title="Music blog/chatroom with Next.js & Firebase" 
            src="/vids/NextBlog.mp4"
            noLink
            github="https://github.com/ryanmohamed/next-firebase-music-blog"
            tags={['front-end', 'server-less back-end', 'rest api', 'react.js', 'firebase', 'firebase authentication', 'firestore database', 'react three']}
            filename={'chat.js'}
            codeSnippet={`${nextblog_doc}`}
            language={'js'}
        >
            <p>Simple <span className='emphasize'>front-end</span> and <span className='emphasize'>Firebase project</span> made with <span className='emphasize'>Next.js</span>. Users are authenticated through Firebase, communicate with each via chatroom where messages are stored via <span className='emphasize'>Firestore</span>.</p>
            <p> As well as query songs via the Lyrics.ovh API and communicate song tabs in the chatroom. </p>
        </VideoFeature>
    )

}

export default NextBlog