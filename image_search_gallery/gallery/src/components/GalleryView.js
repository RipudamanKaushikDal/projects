import React from "react"
import Display from "./Display"

function GalleryView({sources}){
  
    return(
        <section className="gallery">
          <h2>Collections</h2>
           
          <Display images={sources} />  

        </section>
    )
}

export default GalleryView