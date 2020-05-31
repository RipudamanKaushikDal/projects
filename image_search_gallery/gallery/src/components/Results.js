import React from "react"

function Results({srchresult}){
    return(
        <div className='results'>
            {
                srchresult.map((source) =>
                    (<img src={source} alt='search results' />)

                )
            }
        </div>
    )
}

export default Results