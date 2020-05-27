import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GalleryView from './components/GalleryView';


function App() {

  const[state,setState]= useState({
    imgsrc:[],
    selected:{}
  })

  const apiurl="http://172.17.0.2:5000/";

  useEffect(() => {
    axios(apiurl+"images").then(({data}) => {
      let paths = data.imgpaths;
      let sources=[];
      paths.map((path) =>
      sources.push(apiurl+"images/"+path))

      setState(
        () => {return{imgsrc:sources}}
      )
    });
  },[])



  return (
    <div>
      <header>
        <h1>Image Search Gallery</h1>
      </header>
      <main>
        <GalleryView sources={state.imgsrc} />
      </main>
    </div>
  )
}
   


export default App;
