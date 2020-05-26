import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GalleryView from './components/GalleryView';


function App() {

  const[state,setState]= useState({
    results:[],
    selected:{}
  })

  const apiurl="http://172.17.0.2:5000/";

  useEffect(() => {
    axios(apiurl+"images").then(({data}) => {
      let paths = data.imgpaths;

      setState(
        () => {return{results:paths}}
      )
    });
  },[])



  return (
    <div>
      <header>
        <h1>Image Search Gallery</h1>
      </header>
      <main>
        <GalleryView paths={state.results} url={apiurl} />
      </main>
    </div>
  )
}
   


export default App;
