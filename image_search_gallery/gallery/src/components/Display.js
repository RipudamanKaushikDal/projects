import React from "react"

function Display({images}){
    return(
        <div className='display'>
            {
                images.map((pic) =>
                    (<img src={pic} alt="image" />)
                )
            }

        </div>
    )
}

export default Display