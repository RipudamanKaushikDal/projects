import React from "react"

function GalleryView({paths}){
    return(
        <section className="gallery">
            {
                paths.map(
                    (photo) => (
                        <img src={photo} />
                )
                )
            }

        </section>
    )
}

export default GalleryView