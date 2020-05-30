import React from "react"
import Results from "./Results"

function Popup({srchresult,close}){
    return(
        <section className='popup'>
            <h2>Search Results</h2>
            <Results srchresult={srchresult} />
            <button onClick={close}>Close</button>
        </section>
    )

}

export default Popup