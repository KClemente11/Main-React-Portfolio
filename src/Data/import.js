import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { useState, useEffect } from "react"

function Import(){
    // const [imageList, setImageList] = useState([]);
    // const imageListRef = ref(storage, "images/");

    // useEffect(() => {
    //     listAll(imageListRef).then((response) => {
    //         console.log(response)
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageList((prev) => [...prev, url]);
    //             });
    //         });
    //     });
    // }, []);

    // imageList.map((url) => {
    //     console.log(url)
    // })

    const myPicks = ref(storage, 'images/')

listAll(myPicks)
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
  });
}

export default Import