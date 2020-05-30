import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GalleryView from './components/GalleryView'
import Popup from  './components/Popup'


function App() {

  const[state,setState]= useState({
    imgsrc:[],
    selected:[]
  })

  const apiurl="http://172.17.0.2:5000/";

  useEffect(() => {
    axios(apiurl+"photos").then(({data}) => {
      let paths = data.imgpaths;
      let sources=[];
      paths.map((path) =>
      sources.push(apiurl+"photos/"+path))

      setState(
        (prevState) => {return{...prevState,imgsrc:sources}}
      )
    });
  },[])

  const search = (e) => { 
    let path=e.target.src.split('photos/')
    
    axios.post(apiurl+"search",{path:path[1]})
      .then(({data}) => {
        let results=data.searchpaths;
        let photos=[];
        results.map((path) =>
        photos.push(apiurl+"photos/"+path))

        setState((prevState) => {return{...prevState,selected:photos}})
      })     
  } 

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: [] }
    });
  }

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
