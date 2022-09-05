import { Link, NavLink } from 'react-router-dom'
import "./index.scss"
import logo from "../../assets/images/logo.png"
import logosub from "../../assets/images/logo-s.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser, faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import { useState } from 'react'
//const Sidebar = () => <>Hello from sidebar</>

const Sidebar =() => {
    const [showNav, setShowNav] = useState(false);

    return(
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={logo} alt="logo"/>
            <img className="sub-logo" src={logosub} alt="logo-name"/>
        </Link>
    <nav className={showNav ? "mobile-show" : ""}>
        <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" to="/">
            <FontAwesomeIcon icon ={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon ={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" onClick={() => setShowNav(false)} activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon ={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
        icon={faClose}
        onClick={() => setShowNav(false)} 
        color="#ffd700"
        size="3x"
        className="close-icon"
        />
    </nav>
    <ul className={showNav ? "mobile-show" : ""}>
        <li>
            <a target="_blank"
               rel="noreferrer"
               href="https://www.linkedin.com/in/kyleclemente/"
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
            <a target="_blank"
               rel="noreferrer"
               href="https://github.com/KClemente11"
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
    <FontAwesomeIcon
    onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
    />
    </div>
    )
}

export default Sidebar