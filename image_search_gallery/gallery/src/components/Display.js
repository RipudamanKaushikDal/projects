import React from "react"

function Display({images, search}){
    return(
        <div className='display' onClick={search}>
            {
                images.map((pic) =>
                    (<img src={pic} alt="image"  />)
                )
            }

        </div>
    )
}

export default Display