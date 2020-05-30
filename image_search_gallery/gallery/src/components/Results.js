import React from "react"

function Results({srchresult}){
    return(
        <div className='results'>
            {
                srchresult.map((source) =>
                    (<img src={source} />)

                )
            }
        </div>
    )
}

export default Results