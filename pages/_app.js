import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'

// main entry point for every other page
// wrapper for the rest of the app

export default function App({ Component, pageProps }) {
  return <>
    <p id="banner">Thanks for navigating! Check out the Projects Page!</p>
    <Navbar />
    { /* check if the page has an inner layout, if it does use it to render the page */}
    { Component.pageLayout ? <Component.pageLayout><Component {...pageProps} /></Component.pageLayout> : <Component {...pageProps} />}
  </>
}
