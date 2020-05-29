import React from "react"
import Display from "./Display"

function GalleryView({sources , search}){
  
    return(
        <section className="gallery">
          <h2>Collections</h2>
           
          <Display images={sources} search={search} />  

        </section>
    )
}

export default GalleryView