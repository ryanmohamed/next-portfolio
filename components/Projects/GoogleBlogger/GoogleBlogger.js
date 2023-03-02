import { useState, useEffect, React } from 'react'
import FScreenModal from '../../FScreenModal/FScreenModal'
import { VideoFeature } from '../../VideoFeature/VideoFeature'
import styles from './GoogleBlogger.module.css'
import Image from 'next/image'
import sequenceDiagram from '../../../public/projects/fullstack/blogger/sequencediagram.png'
import Spinner from '../../Spinner/Spinner'

function GoogleBlogger(){

    // fetch the contents of each of the public files
    const [petmatcher_doc, set_petmatcher_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/petmatcher_auth_js.txt').then(r => r.text()).then(text => set_petmatcher_doc(text))
        console.log(petmatcher_doc)
    }, [])

    // full screen modal state
    const [ toggle, setToggle ] = useState(false)

    return (
        <>
            <VideoFeature title="Posting song lyrics with OAuth 2.0" 
                src="/vids/Petmatcher_Demo.mp4"
                href="https://petmatcher.netlify.app" 
                github="https://github.com/ryanmohamed/pandagum-client"
                noVideo
                tags={['back-end', 'node.js', 'html 5', 'css', 'oauth 2.0', 'rest api', 'http / https', 'tcp / ip']}
                filename={'auth.js'}
                codeSnippet={`${petmatcher_doc}`}
                language={'js'}
            >
                <p>This is a project for <span className="emphasize">Internet Web & Technologies</span> that allows a user to <span className="emphasize">search</span> for their favorite song and <span className="emphasize">seamlessly make a post</span> to their Blogger with it&apos;s lyrics. </p>
                <p>This project implements <span className='emphasize'>OAuth 2.0</span> methodology for <span className="emphasize">interaction between multiple REST APIs</span>. After retrieving the users desired lyrics, permission to post to Blogger via Google is granted through OAuth 2.0.</p>
                <span onClick={() => { setToggle(!toggle) }} className={styles.OpenModal}> 
                    Click here to view sequence diagram 
                </span>
            </VideoFeature>

            <FScreenModal 
                src="/projects/fullstack/blogger/sequencediagram.png" 
                toggle={toggle}
                setToggle={setToggle}
            >
                <Image src={sequenceDiagram} alt="sequence diagram" placeholder={<Spinner />}/>
            </FScreenModal>
        </>
    )

}

export default GoogleBlogger