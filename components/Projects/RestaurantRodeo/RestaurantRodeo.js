import { useState, useEffect } from 'react'
import { VideoFeature } from '../../VideoFeature/VideoFeature'

const S = ({children}) => {
    return (
        <span className='emphasize'>
            {children}
        </span>
    )
}

function RestaurantRodeo(){

    // fetch the contents of each of the public files
    const [rodeo_doc, set_rodeo_doc] = useState(undefined)

    // go fetch the files and load them in
    useEffect(() => {
        fetch('/snippets/restaurantrodeo.txt').then(r => r.text()).then(text => set_rodeo_doc(text))
        console.log(rodeo_doc)
    }, [])

    return (
        <VideoFeature title="Restaurant Rodeo 🤠" 
            src="/vids/RestaurantRodeo.mp4"
            href="https://restaurantrodeo.netlify.app" 
            github="https://github.com/ryanmohamed/restaurant-roulette"
            notable={true}
            tags={['fullstack', 'front-end', 'back-end', 'next.js', 'react.js', 'typescript', 'tailwind css', 'rest api', 'ssr', 'caching']}
            filename={'Carousel.tsx'}
            codeSnippet={`${rodeo_doc}`}
            language={'typescript'}
        >
            <p>Restaurant Rodeo is a small <S>full-stack</S> project for finding restaurants in your local area or area of preference.</p>
            <p>The project is a demonstration of best practices when it comes to consumption of external <S>REST APIs</S>.</p>
            <p>This involves techniques such as <S>server-side rendering</S> (SSR), <S>caching,</S> <S>proxied API endpoints,</S> and <S>debouncing</S>.</p>
            <p>The project mainly makes use of the <S>Yelp Fusion API,</S> <S>Distance Matrix API,</S> and the <S>Google Maps for JavaScript API</S>.</p>
        </VideoFeature>

    )

}

export default RestaurantRodeo