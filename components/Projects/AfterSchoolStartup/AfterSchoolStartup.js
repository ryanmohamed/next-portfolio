import { useState, useEffect } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'

function AfterSchoolStartup(){

    // fetch the contents of each of the public files
    const [ass_doc, set_ass_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/fitbyte.txt').then(r => r.text()).then(text => set_ass_doc(text))
        console.log(ass_doc)
    }, [])

    return (
        <VideoFeature title="After School Startup" 
            src="/vids/AfterSchoolStartup.mp4"
            href="https://afterschoolstartup.com" 
            notable={true}
            tags={["Software Development Life Cycle",
            "Agile",
            "GitHub",
            "Version Control",
            "CI/CD",
            "Vercel",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Next.js",
            "Firebase",
            "Google Cloud Platform (GCP)",
            "NoSQL",
            "PayPal",
            "Middleware",
            "Server-Side Rendering",
            "Payment Processing"
        ]}
        >
            <p>An After School program meant to give middle and high school students the <span className="emphasize">emerging skills of tomorrow</span>, today.</p>
            <p>Responsible for <span className="emphasize">system architecture, version control</span> and <span className="emphasize">CI/CD pipeline</span>. Integrated and developed authentication, NoSQL database, user role system, payment gateway, webhooks, external and internal API endpoints, and server-side rendered pages.</p>
        
        </VideoFeature>
    )

}

export default AfterSchoolStartup