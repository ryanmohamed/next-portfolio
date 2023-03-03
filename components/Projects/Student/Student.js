import { useState, useEffect, React } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'
import Image from 'next/image'

function Student(){

    // fetch the contents of each of the public files
    const [student_doc, set_student_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/student.txt').then(r => r.text()).then(text => set_student_doc(text))
        console.log(student_doc)
    }, [])

    return (
        <>
            <VideoFeature title="Assignment tracker/priority analysis with React & Node" 
                src="/vids/Student.mp4"
                noLink 
                github="https://github.com/ryanmohamed/student_plus_plus_client"
                tags={['fullstack', 'front-end', 'react.js', 'back-end', 'node.js', 'express.js', 'jwt authentication', 'rest api', 'relational data modeling', 'mysql', 'sequelize.js', 'integration tests', 'agile', 'software development']}
                filename={'Assignment.js'}
                codeSnippet={`${student_doc}`}
                language={'js'}
            >
                <p>This is a fullstack B2C web app for <span className="emphasize">tracking assignments/tasks</span> and <span className="emphasize">extrapolating their importance/rank</span> in a collective to-do list</p>
                <p>Project stack includes <span className='emphasize'>React</span>, <span className='emphasize'>Node</span>, <span className='emphasize'>Express</span> and <span className='emphasize'>MySQL</span>. Users are verified through <span className='emphasize'>JWT authentication</span> and gain access to their personalized to-do list. Users can create/delete/update courses & assignments while our servers appropriately adapt to changes. </p>

            </VideoFeature>
        </>
    )

}

export default Student