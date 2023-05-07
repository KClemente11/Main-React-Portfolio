import "./upload.scss"
import { useState, useEffect } from "react";
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import {v4} from "uuid"

function Upload(){
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if(imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            alert("image uploaded");
            getDownloadURL(snapshot.ref).then((url) => {
                setImageList((prev) => [...prev, url])
            })
        })
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            console.log(response)
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return(
    <div className="images-container">
        <input className="input" type="file" onChange={(event) => {
            setImageUpload(event.target.files[0])
            }}
        />
        <button className="button" onClick={uploadImage}>Upload image</button>

        {/* <div className="images-container"></div> */}
        {imageList.map((url) => {
            return (
            <div className="image-box">
                <img className="porfolio-image" src={url} alt="portfolio"/>
            </div>
            )
        
        })}
        {/* </div> */}
    </div>
    )
}

export default Upload

