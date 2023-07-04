import { useState, useEffect } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'

const S = ({children}) => {
    return (
        <span className='emphasize'>
            {children}
        </span>
    )
}

function StripeOpenAI(){

    // fetch the contents of each of the public files
    const [stripe_doc, set_stripe_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/stripeopenai.txt').then(r => r.text()).then(text => set_stripe_doc(text))
        console.log(stripe_doc)
    }, [])

    return (
        <VideoFeature title="Team AI Generation " 
            src="/vids/StripeOpenAI.mp4"
            href="https://github.com/ryanmohamed/stripe-openai-socket-generation" 
            github="https://github.com/ryanmohamed/stripe-openai-socket-generation"
            tags={['fullstack', 'front-end', 'back-end', 'node.js', 'next.js', 'react.js', 'typescript', 'postgresql', 'docker', 'redis', 'next-auth', 'prisma', 'trpc', 'rest api', 'websockets', 'tailwind css', 'ssr', 'mvc', 'client-server', 'orm', 'caching']}
            filename={'utilities.mts'}
            codeSnippet={`${stripe_doc}`}
            language={'typescript'}
        >
            <p>AI Matcher is a large-scale <S>full-stack</S> project for <S>generating</S> and <S>sharing</S>  <S>team prompted</S> AI curated images.</p>
            <p>The project is split into a <S>dual-architecture</S> with social media operations following standard <S>MVC</S> and <S>CRUD</S> principles using <S>Prisma</S> as an <S>ORM</S> and <S>tRPC</S> as the <S>authenticated controller</S> in the back-end. </p>
            <p><S>Real-time</S> connections from clients directly to the game pool and game rooms are authenticated and handled by an external <S>socket server</S> written with <S>Express</S> in <S>Node.js</S>.</p>
            <p>Sensitive <S>middleware</S> operations between web server and socket server are handled via a standard <S>REST API</S> endpoint on the socket server.</p>
        </VideoFeature>

    )

}

export default StripeOpenAI