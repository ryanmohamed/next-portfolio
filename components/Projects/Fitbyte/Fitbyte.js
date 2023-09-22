import { useState, useEffect } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'

function Fitbyte(){

    // fetch the contents of each of the public files
    const [fitbyte_doc, set_fitbyte_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/fitbyte.txt').then(r => r.text()).then(text => set_fitbyte_doc(text))
        console.log(fitbyte_doc)
    }, [])

    return (
        <VideoFeature title="Fitbyte" 
            src="/vids/Fitbyte.mp4"
            href="https://fitbyte.me" 
            notable={true}
            tags={["Software Development Life Cycle",
            "Agile",
            "GitHub",
            "Version Control",
            "CI/CD",
            "Vercel",
            "React",
            "JavaScript",
            "Next.js",
            "Firebase",
            "Google Cloud Platform (GCP)",
            "NoSQL",
            "OpenAI",
            "PayPal",
            "Stripe",
            "RevenueCat",
            "Middleware",
            "Server-Side Rendering",
            "Payment Processing"
        ]}
        >
            <p>An <span className="emphasize">AI-powered cross platform</span> web app to generate <span className="emphasize">personally optimized</span> meal and fitness plans. Sign in, generate and save fitness plans at <span className="emphasize">no cost.</span> <span className="emphasize">Pro memberships</span> unlock access to progress statistics, macro information, weigh-ins, goal tracking and optimized fitness plan. </p>
            <p>Responsible for <span className="emphasize">system architecture, version control</span> and <span className="emphasize">CI/CD pipeline</span>. Integrated authentication, NoSQL database, streaming OpenAI API responses, payment gateway, webhooks, external and internal API endpoints, and securely server-side rendered pages.</p>
        
        </VideoFeature>
    )

}

export default Fitbyte