import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GalleryView from './components/GalleryView';


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
        () => {return{imgsrc:sources}}
      )
    });
  },[])

  const search = (imagepath) => {
    let path=imagepath.target.src.split('photos/')

    axios.post(apiurl+"search",{path:path[1]})
      .then(({data}) =>{
        let results=data.searchpaths

        setState(
          () => {return{selected:results}}
        )
      }) 
      console.log(state.selected)
  } 


  return (
    <div>
      <header>
        <h1>Image Search Gallery</h1>
      </header>
      <main>
        <GalleryView sources={state.imgsrc} search={search} />
      </main>
    </div>
  )
}
   


export default App;
