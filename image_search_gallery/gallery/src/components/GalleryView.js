import React, { useEffect } from "react"
import axios from 'axios'

function GalleryView({paths},{url}){
  let allImages= []
  useEffect(()=>{
    allImages = paths.map((path)=>{
      // console.log("BP1",path)
      return (
        <img alt="Image"></img>
      )
    })
    console.log("BP2",allImages)
  })
    return(
        <section className="gallery">
            {allImages}
            

                {/* //  axios(url+path).then((image) =>
                 //   (<img src={image} />)
                 // )   */}
              )  
            }

        </section>
    )
}

export default GalleryView