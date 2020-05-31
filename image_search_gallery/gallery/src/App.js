import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GalleryView from './components/GalleryView'
import Popup from  './components/Popup'


function App() {

  //initialize state 
  const[state,setState]= useState({
    imgsrc:[],
    selected:[]
  })

  //define our base url
  const apiurl="http://172.17.0.2:5000/";


  // load images as soon as the components mount by making api call to the server
  useEffect(() => {
    axios(apiurl+"photos").then(({data}) => {
      let paths = data.imgpaths;
      let sources=[];
      paths.map((path) =>
      sources.push(apiurl+"photos/"+path))

      // save the returned data in state.imgsrc
      setState(
        (prevState) => {return{...prevState,imgsrc:sources}}
      )
    });
  },[]) // run the effect only once 


  //handle searches onClick
  const search = (event) => { 
    let path=event.target.src.split('photos/')
    
    //post the img source to server search api and handle returned data
    axios.post(apiurl+"search",{path:path[1]})
      .then(({data}) => {
        let results=data.searchpaths;
        let photos=[];
        results.map((path) =>
        photos.push(apiurl+"photos/"+path))

        //save search results in state.selected 
        setState((prevState) => {return{...prevState,selected:photos}})
      })     
  } 

  // define a method to close to  search popup
  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: [] }
    });
  }

  //render view components and conditionally render popup
  return (
    <div>
      <header>
        <h1>Image Search Gallery</h1>
      </header>
      <main>
        <GalleryView sources={state.imgsrc} search={search} />
        {(state.selected.length >= 1) ? <Popup srchresult={state.selected} close={closePopup}/> :false }
      </main>
    </div>
  )
}
   


export default App;
