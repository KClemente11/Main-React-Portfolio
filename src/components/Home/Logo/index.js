import "./index.scss"
import LogoKC from '../../../assets/images/Full.jpg'

const Logo = () => {

    return(
        <div className="logo-container">
            <img className="solid-logo" 
            src={LogoKC}
            alt="JavaScript,  Developer" 
            />
        </div>
    )
}

export default Logo