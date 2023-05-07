import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import { useState, useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../Data/portfolio"
import { db, storage } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from "firebase/storage"

//import Import from "../../Data/import";

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState("text-animate");
    const [portfolio, setPortfolio] = useState([]);
    const myPhotos = ref(storage, 'images/')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass("text-animate-hover")
        }, 3000)
    }, [])

    // useEffect(() => {
    //     getPortfolio();
    // }, []);

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }

    listAll(myPhotos)
    .then(async (res) => {
      const { items } = res;
      const urls = await Promise.all(
        items.map((item) => getDownloadURL(item))
      );
  
      // Array of download URLs of all files in that folder
      console.log(urls);
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      return alert("ERROR!")
    });
 
    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}>
                                        View
                                    </button>
                                </div>
                               </div>
                    })
                }
            </div>
        )
    }

    return (
        <>    
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="ball-rotate"/>
        </>
    )
}

export default Portfolio;