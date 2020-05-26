import React from "react"
import axios from 'axios'
import Display from "./Display"

function GalleryView({paths}){
  
  let sources=[]
  const apiurl="http://172.17.0.2:5000/";
  paths.map((path) =>
    axios(apiurl+"images/"+path).then((image) =>
      sources.push(image))
  )
  console.log(sources)

    return(
        <section className="gallery">
           
          <Display images={sources} />  

        </section>
    )
}

export default GalleryView