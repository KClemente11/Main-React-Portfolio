import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faJsSquare, faHtml5, faCss3, faGitAlt, faReact} from "@fortawesome/free-brands-svg-icons"
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    return(
    <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={["A","b","o","u","t"," ","m","e"]}
                        idx={15}
                        />
                </h1>
                <p>
                    I'm a very ambiitious developer with full-stack capabilities looking for a role to work in a team with the latest technologies on challnging and diverse projects.
                </p>
                <p>
                    If I could describe myself in one sentence, it would be that I am a very outgoing person who enjoys working with a team and is not afraid of a challenge.
                </p>
            </div>

            <div className="stage-cube-cont">  
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5eD4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-rotate" />
    </>
    )
}

export default About