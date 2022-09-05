import "./index.scss"
import { useEffect, useRef } from 'react'
import LogoKC from '../../../assets/images/Main.jpg'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'



const Logo = () => {
    // const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 5,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   )
  // }, [])

    return(
        <div className="logo-container">
            <img className="solid-logo" 
            src={LogoKC}
            alt="JavaScript,  Developer" 
            />

        {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
        >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
        <path ref={outlineLogoRef} d="M691.5,469.6h-80.1l-43.8-45c-15.1-15.4-22-22.8-26.6-28.7l-3.6,24.6l-8.7,49.1h-53.2l30.5-171.3h53l-6.9,39.7
	c-2,10.5-4.6,21-6.4,30c7.7-6.1,18.7-14.9,36.3-27.9l56.8-41.7h76.8l-74,49.1c-26.1,17.1-37.9,24.8-49.9,31.5
	c8.5,6.7,20,16.1,38.9,34L691.5,469.6z"/>
        <path ref={outlineLogoRef} d="M868.1,425.6l-41.7,44h-86c-53.5,0-89.1-32.2-89.1-75.5c0-56.3,53.8-95.7,119.3-95.7h120.1l-42,44.5h-86
	c-31.5,0-58.1,20.2-58.1,47.4c0,21.2,17.7,35.3,43.5,35.3L868.1,425.6L868.1,425.6z"/>
        </g>
      </svg> */}
        </div>
    )
}

export default Logo