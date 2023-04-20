import { useState, useEffect } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'

const S = ({children}) => {
    return (
        <span className='emphasize'>
            {children}
        </span>
    )
}

function Quizitiv(){

    // fetch the contents of each of the public files
    const [quizitiv_doc, set_quizitiv_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/quizitiv.txt').then(r => r.text()).then(text => set_quizitiv_doc(text))
        console.log(quizitiv_doc)
    }, [])

    return (
        <VideoFeature title="Quizitiv" 
            src="/vids/Quizitiv.mp4"
            href="https://quizitiv.netlify.app" 
            github="https://github.com/ryanmohamed/quizitiv"
            notable={true}
            tags={['fullstack', 'front-end', 'back-end', 'next.js', 'react.js', 'typescript', 'firebase', 'tailwind', 'ruby', 'sinatra', 'restful api', 'nosql']}
            filename={'app.rb'}
            codeSnippet={`${quizitiv_doc}`}
            language={'ruby'}
        >
            <p>Quizitiv is platform for <S>creating</S> and <S>taking quizzes</S> in a <S>knowledge-sharing</S> based community.</p>
            <p>Taking quizzes created by others and scoring enough can grant you <S>experience points</S>, of which you can use to <S>modify</S> and play games on the site.</p>
            <p>Created with <S>TypeScript</S>, <S>Next.js</S>, <S>Firebase</S>, <S>Ruby</S>, and <S>Tailwind</S>.</p>
        
        </VideoFeature>
    )

}

export default Quizitiv