import React,{useState} from 'react'
import './App.scss';
import BookDetails from './components/BookDetails'
import {Book} from './types'
import { useQuery} from '@apollo/client'
import { getThumbnails} from './ApolloClient';

function App() {

  const [showBook, setshowBook] = useState(false)
  const [bookID, setBookID] = useState(0)
  const {loading,error,data} = useQuery(getThumbnails)


  const loadBook = (id:number) => {
    setshowBook(!showBook)
    setBookID(id)
  }

  const addBook = () => {
   console.log("Add Books")
  }

  return (
    
      <div className="app">
        {loading === true?  <p>Loading ...</p>:
        <div className="shelf" >
          {data.listBooks.map((book:Book) => ( 
              
                <img src={book.thumbnail} alt="preview" className="covers" onClick={() =>loadBook(book.id)} />
            ))}
        </div>}
        {showBook ===true?<BookDetails id={bookID} />:
          <button className="add_book" onClick={addBook} >
            Add Book
          </button>
          }
        </div>
   
  );
}

export default App;

