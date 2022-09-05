import { useEffect, useState } from 'react'
import LogoTitle from "../../assets/images/logo.png"
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from "./Logo"
import "./index.scss"
import Loader from 'react-loaders'
import Logo from './Logo'

const Home = () =>{
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = ["K","y","l","e"," ","C","l","e","m","e","n","t","e",","]
    const jobArray = ["y","o","u","r"," ","n","e","x","t"," ","w","e","b"," ","d","e","v","e","l","o","p","e","r"]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000)
    }, [])

    return(
    <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m&nbsp;</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={29}/>
                </h1>
                <h2>Fullstack Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='ball-rotate' />
    </>
    )
}

export default Home