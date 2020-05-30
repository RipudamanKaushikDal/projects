import React from "react"

function Display({sources, search}){
    return(
        <div className='display' onClick={search} >
            {
                sources.map((pic) =>
                (<img src={pic} alt="dataset"  />)
            )
            }
        </div>
    )
}

export default Display