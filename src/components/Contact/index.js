import { useState, useEffect, useRef } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import emailjs from "@emailjs/browser"
import "./index.scss"

const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 4000)
    }, [])

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        
        emailjs.sendForm( "service_kktjnjj", "template_x9mt2ys", form.current, "OnGSPv6DnoAoIKWRr")

            .then(() => {
                alert("Message sent. Thank you!")
                console.log("Message sent")
                //window.location.reload(false)
                // window.location.reload()
                window.location.replace('/')
            },
            () => {
                alert("Failed to send :( please try again.")
            })
    }

    return(
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={["C","o","n","t","a","c","t"," ","m","e"]}
                    idx={15}
                    />
                </h1>
                <p>
                    If you have any questions or comments, feel free to contact me and I will get back to you as soon as possible!
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="from_name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="reply_to" placeholder="Email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="ball-rotate" />
    </>
    )
}

export default Contact